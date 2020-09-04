import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, Users } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { PeopleService } from '../shared/services/people.service';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit, OnDestroy {

  obs$: Subscription
  users$: Subscription
  session: User
  reloading = false
  today = new Date()
  users: Users

  constructor(private loginService: LoginService,
              private peopleService: PeopleService,
              private chatService: ChatService) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.users$ = this.peopleService.fetchFriends().subscribe(users => {
        this.users = users
        this.reloading = false
      })
    })
  }

  goToChat(id: string, color: string, folder?: string) {
    this.chatService.goToChat(id, color, folder)
  }

  ngOnDestroy() {
    this.obs$.unsubscribe()
    this.users$.unsubscribe()
  }

}
