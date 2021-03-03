import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User, Event } from '../../interfaces';
import { LoginService } from '../../services/login.service';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot-layout',
  templateUrl: './bot-layout.component.html',
  styleUrls: ['./bot-layout.component.css']
})
export class BotLayoutComponent implements OnInit, OnDestroy {

  reloading = false
  oSub: Subscription
  session: User
  user$: Observable<User>
  events$: Subscription
  events: Event[]
  messages$: Subscription
  id: string
  textarea = ''
  zoom = false
  mesloading = false
  image = ''

  constructor(private loginService: LoginService, 
              private eventsService: EventsService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloading = true
    this.oSub = this.loginService.getUser().subscribe(user =>{
      this.session = user
      this.reloading = false
    })
    this.events$ = this.eventsService.fetchForBot().subscribe(events => this.events = events)
  }

  ngAfterViewInit() {
    let TimerId = setInterval(scroll, 500)

    function scroll() {
      if (document.getElementById('forScroll')) {
        clearTimeout(TimerId)
        document.getElementById('forScroll').scrollIntoView(false)
      }
    }
  }

  newEventFromMe(message) {
    this.events.push(message)
    setTimeout(scroll, 500)
    function scroll() {
      document.getElementById('forScroll').scrollIntoView(false)
    }    
  }

  openZoom(src) {
    this.image = src
    this.zoom = true
  }

  closeZoom(result) {
    if (result) this.zoom = false
  }

  newMessageFromMe(event) {
    this.events.push(event)   
  }

  want(id) {
    this.eventsService.changeUserStatus(id, 1).subscribe(new_event => {
      for (let event of this.events) {
        if (event._id == new_event._id) {
          event.wait = new_event.wait
          event.participants = new_event.participants
          let nbox = document.getElementById(`n-${event._id}`)
          nbox.remove()
          let wbox = document.getElementById(`w-${event._id}`)
          wbox.remove()
        }
      }
    })
  }

  not_want(id) {
    this.eventsService.changeUserStatus(id, -1).subscribe(event => {
      let box = document.getElementById(event._id)
      box.remove()
    })
  }

  toGroup(id) {
    this.router.navigate([`/group/${id}`], {queryParams: {color: this.session.defaultColor, folder: '603df642e8189fa35e95273f'}})
  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
    this.events$.unsubscribe()
  }

}
