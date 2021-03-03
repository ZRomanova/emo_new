import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Event, BotButton } from '../shared/interfaces';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { EventsService } from '../shared/services/events.service';
import { BotService } from '../shared/services/bot.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit, OnDestroy {

  session: User
  reloading = false
  obs$: Subscription
  eSub: Subscription
  lSub: Subscription
  events: Event[]
  buttons$: Observable<BotButton[]>
  emo = false

  

  constructor(private loginService: LoginService,
              private router: Router,
              private eventsService: EventsService,
              private botService: BotService) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.eSub = this.eventsService.fetchForEvents().subscribe(events => {
        this.events = events
        this.lSub = this.eventsService.emoLetters().subscribe(event => {
          if (event) this.emo = true
          this.reloading = false
        })
      })     
    })
    this.buttons$ = this.botService.fetch() 
  }

  goToEmoBot() {
    this.router.navigate([`/emo`])
  }
  
  goToChat(id) {
    this.router.navigate([`/group/${id}`], {queryParams: {color: this.session.defaultColor, folder: '603df642e8189fa35e95273f'}})
  }

  ngOnDestroy() {
    this.obs$.unsubscribe()
    this.eSub.unsubscribe()
    this.lSub.unsubscribe()
  }

}
