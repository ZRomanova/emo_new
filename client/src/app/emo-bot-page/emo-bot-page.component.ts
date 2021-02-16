import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User, BotButton, Institution } from '../shared/interfaces';
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

  stage: number = 0
  myEventType: number
  myEventUsers: string[] = []
  buttons$: Observable<BotButton[]>
  users$: Subscription
  users: User[]
  institutions$: Observable<Institution[]>
  institution: string
  description: string

  constructor(private botService: BotService, 
              private router: Router,
              private peopleService: PeopleService,
              private eventsService: EventsService) { }

  ngOnInit(): void {
    this.institution = this.session.institution
  }

  startEvent() {
    this.buttons$ = this.botService.fetch()
    this.stage = 1
  }

  makeEvent(type) {
    this.myEventType = type
    this.stage = 2
    this.users$ = this.peopleService.fetchAll(this.session.institution).subscribe(users => {
      this.users = users
    })
    this.institutions$ = this.peopleService.getInstitutions()
  }

  newInstitution() {
    this.users$ = this.peopleService.fetchAll(this.institution).subscribe(users => {
      this.users = users
    })
  }

  checkUser(id) {
    if (this.myEventUsers.includes(id))  {
      let index = this.myEventUsers.indexOf(id, 0)
      this.myEventUsers.splice(index, 1)
    }
    else {
      this.myEventUsers.push(id)
    }
  }

  checkAll() {
    this.myEventUsers = []
    for (let user of this.users) {
      this.myEventUsers.push(user._id)
    }
  }

  checkNobody() {
    this.myEventUsers = []
  }

  cross() {
    this.router.navigate(['/people/events'])
  }

  toDescription() {
    this.stage = 3
  }

  finish() {
    this.eventsService.create(this.myEventUsers, this.myEventType, this.description)
    .subscribe(event => {
      this.stage = 0
      this.myEventType = null
      this.myEventUsers = []
    },
    error => console.log(error.error.message)
    )
  }

  ngOnDestroy() {
    if (this.stage >= 2) this.users$.unsubscribe()
  }
}
