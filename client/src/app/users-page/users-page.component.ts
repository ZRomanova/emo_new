import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User, Institution, Filter } from '../shared/interfaces';
import {UsersService} from '../shared/services/users.service'
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

const STEP = 25

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  limit = STEP
  offset = 0

  oSub: Subscription
  users: User[] = []
  loading = false
  reloading = false
  noMore = false
  filter: Filter = {}
  session$: Observable<User>

  status = {
    1: 'Администратор',
    2: 'Модератор',
    3: 'Подопечный',
    4: 'Гость',
    5: 'Взрослый'
  }
  login: string
  name: string
  surname: string
  institution: string
  sex: string
  role1: string
  role2: string
  role3: string
  role4: string
  role5: string

  institutions$: Observable<Institution[]>

  constructor(
    private usersService: UsersService,
    private loginService: LoginService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloading = true

    this.session$ = this.loginService.getUser()
    
    this.route.params.subscribe(() => {
      this.institutions$ = this.usersService.getInstitutions()
    })

    this.fetch()
  }

  private fetch() {
    const params = Object.assign({}, this.filter, {
      offset: this.offset,
      limit: this.limit
    })
    
    this.oSub = this.usersService.fetch(params).subscribe(users => {
      this.users = this.users.concat(users)
      this.noMore = users.length < STEP
      this.loading = false
      this.reloading = false
    })
  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
  }

  loadMore() {
    this.offset += STEP
    this.loading = true
    this.fetch()
  }

  deleteUser(login, id) {
    const decision = window.confirm(`Вы уверены, что хотите удалить пользователя с логином ${login}?`)

    if (decision) {
      this.usersService.delete(id)
        .subscribe(
          response => {
            let box = document.getElementById(id)
            box.remove()
          },
          error => {console.log(error.error.message)},
          () => {}
        )
    }
  }

  onFilter(filter: Filter) {
    if (this.login) filter.login = this.login
    if (this.name) filter.name = this.name
    if (this.surname) filter.surname = this.surname
    if (this.institution) {
      if (this.institution != 'all') filter.institution = this.institution
    }
    if (this.sex) {
      if (this.sex != '0') filter.sex = this.sex
    }
    let roles = []
    if (this.role1) roles.push('1')
    if (this.role2) roles.push('2')
    if (this.role3) roles.push('3')
    if (this.role4) roles.push('4')
    if (this.role5) roles.push('5')
    if (roles !== []) filter.levelStatus = roles.toString()

    this.users = []
    this.offset = 0
    this.filter = filter
    this.reloading = true
    this.fetch()
  }

}
