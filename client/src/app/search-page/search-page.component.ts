import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User, Institution } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { UsersService } from '../shared/services/users.service';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  obs$: Subscription
  session: User
  institutions$: Observable<Institution[]>
  users$: Observable<User[]>
  reloading = false
  institution: string

  constructor(private usersService: UsersService,
              private loginService: LoginService,
              private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.institution = user.institution
      this.users$ = this.peopleService.fetchAll(user.institution)
      this.reloading = false
    })
    this.institutions$ = this.usersService.getInstitutions()
  }

  ngOnDestroy() {
    this.obs$.unsubscribe()
  }

  newInstitution() {
    this.users$ = this.peopleService.fetchAll(this.institution)
  }
}
