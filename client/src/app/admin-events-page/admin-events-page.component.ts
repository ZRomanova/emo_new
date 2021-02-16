import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Subscription, Observable } from 'rxjs';
import { User, Institution, Filter, Event } from '../shared/interfaces';
import { UsersService } from '../shared/services/users.service';
import { EventsService } from '../shared/services/events.service';
import { Router } from '@angular/router';

const STEP = 40

@Component({
  selector: 'app-admin-events-page',
  templateUrl: './admin-events-page.component.html',
  styleUrls: ['./admin-events-page.component.css']
})

export class AdminEventsPageComponent implements OnInit, OnDestroy {

  limit = STEP
  offset = 0

  loading = false
  reloading = false
  noMore = false
  oSub: Subscription
  session$: Subscription
  session: User
  institutions$: Observable<Institution[]>
  filter: Filter = {}
  events: Event[] = []
  institution: string

  constructor(private loginService: LoginService,
              private usersService: UsersService,
              private eventsService: EventsService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloading = true

    this.session$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.institution = this.session.institution
    })

    this.institutions$ = this.usersService.getInstitutions()

    this.fetch()
  }

  private fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    })

    this.oSub = this.eventsService.fetchForModerators(params).subscribe(events => {
      this.events = this.events.concat(events)
      this.noMore = events.length < STEP
      this.loading = false
      this.reloading = false
    })
  }

  loadMore() {
    this.offset += STEP
    this.loading = true
    this.fetch()
  }

  onFilter() {
    this.events = []
    this.offset = 0
    this.filter.institution = this.institution
    this.reloading = true
    this.fetch()
  }

  becomeModerator(id) {
    this.eventsService.update(id, this.session._id).subscribe(event => {
      this.router.navigate([`/manage/events/${id}`], {queryParams: {institution: this.session.institution}})
    },
    error => console.log(error))
  }

  ngOnDestroy() {
    this.session$.unsubscribe()
  }

}
