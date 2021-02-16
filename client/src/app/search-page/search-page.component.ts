import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User, Institution } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { PeopleService } from '../shared/services/people.service';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  obs$: Subscription
  session: User
  institutions$: Observable<Institution[]>
  users$: Subscription
  users: User[]
  reloading = false
  institution: string
  today = new Date()

  constructor(private loginService: LoginService,
              private peopleService: PeopleService,
              private chatService: ChatService) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.institution = user.institution
      this.users$ = this.peopleService.fetchAll(user.institution).subscribe(users => {
        this.users = users
        for (let user of users) {
          if ((this.today.getTime() - new Date(user.last_active_at).getTime()) < 300000) {
            user.active = true
          }
          else {
            user.active = false
          }
        }
        this.reloading = false
      })
    })
    this.institutions$ = this.peopleService.getInstitutions()
  }

  ngOnDestroy() {
    this.obs$.unsubscribe()
    this.users$.unsubscribe()
  }

  goToChat(id: string, color: string, folder?: string) {
    this.chatService.goToChat(id, color, folder)
  }

  newInstitution() {
    this.users$ = this.peopleService.fetchAll(this.institution).subscribe(users => {
      this.users = users
      for (let user of users) {
        if ((this.today.getTime() - new Date(user.last_active_at).getTime()) < 300000) {
          user.active = true
        }
        else {
          user.active = false
        }
      } 
    })
  }
}
