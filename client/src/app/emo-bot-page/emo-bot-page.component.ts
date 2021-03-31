import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User, BotButton, Institution, Event } from '../shared/interfaces';
import { BotService } from '../shared/services/bot.service';
import { EventsService } from '../shared/services/events.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'app-emo-bot-page',
  templateUrl: './emo-bot-page.component.html',
  styleUrls: ['./emo-bot-page.component.css']
})
export class EmoBotPageComponent implements OnInit, OnDestroy {

  @Input() session: User
  @Output() newEvent = new EventEmitter<Event>()

  stage: number = 0
  myEventType: number
  myEventInstit: string[] = []
  buttons$: Observable<BotButton[]>
  iSub$: Subscription
  institutions: Institution[]
  description: string

  constructor(private botService: BotService, 
              private router: Router,
              private peopleService: PeopleService,
              private eventsService: EventsService) { }

  ngOnInit(): void {
  }

  startEvent() {
    this.buttons$ = this.botService.fetch()
    this.stage = 1
  }

  makeEvent(type) {
    this.myEventType = type
    this.stage = 2
    this.iSub$ = this.peopleService.getInstitutions().subscribe(institutions => this.institutions = institutions)
  }

  checkUser(id) {
    if (this.myEventInstit.includes(id))  {
      let index = this.myEventInstit.indexOf(id, 0)
      this.myEventInstit.splice(index, 1)
    }
    else {
      this.myEventInstit.push(id)
    }
  }

  checkAll() {
    this.myEventInstit = []
    for (let instit of this.institutions) {
      this.myEventInstit.push(instit._id)
    }
  }

  checkNobody() {
    this.myEventInstit = []
  }

  cross() {
    this.router.navigate(['/people/events'])
  }

  toDescription() {
    this.stage = 3
  }

  finish() {
    this.eventsService.create(this.myEventInstit, this.myEventType, this.description)
    .subscribe(event => {
      this.stage = 0
      this.myEventType = null
      this.myEventInstit = []
      this.newEvent.emit(event)
    },
    error => console.log(error.error.message)
    )
  }

  ngOnDestroy() {
    if (this.stage >= 2) this.iSub$.unsubscribe()
  }
}
