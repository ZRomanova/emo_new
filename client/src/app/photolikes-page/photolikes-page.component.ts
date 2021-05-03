import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/services/events.service';
import { User, Event, BotButton } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { Subscription, Observable } from 'rxjs';
import { BotService } from '../shared/services/bot.service';

@Component({
  selector: 'app-photolikes-page',
  templateUrl: './photolikes-page.component.html',
  styleUrls: ['./photolikes-page.component.css']
})
export class PhotolikesPageComponent implements OnInit {

  session: User
  obs$: Subscription
  events: Event[]
  events$: Subscription
  buttons$: Observable<BotButton[]>
  reloading = false
  zoom = false
  image = ''

  constructor(private loginService: LoginService,
    private eventsService: EventsService,
    private botService: BotService) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.events$ = this.eventsService.fetchForPhotolikes().subscribe(events => {
        this.events = events
        this.reloading = false
      })
    })
    this.buttons$ = this.botService.fetch() 
  }

  openZoom(src) {
    this.image = src
    this.zoom = true
  }

  closeZoom(result) {
    if (result) this.zoom = false
  }

  deleteLike(id) {
    this.eventsService.deleteLike(id).subscribe(event => {
      this.changeArr(id, -1)
    })
  }

  pushLike(id) {
    this.eventsService.pushLike(id).subscribe(event => {
      this.changeArr(id, 1)
    })
  }

  changeArr = (id, like) => {
    let item = this.events.find(x => x._id === id)
    if (like == 1) item.likes.push(this.session._id)
    if (like == -1) {
      let index = item.likes.indexOf(this.session._id)
      item.likes.splice(index, 1)
    }
  }

}
