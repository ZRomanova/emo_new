import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces';
import { ChatService } from '../../services/chat.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit, OnDestroy {

  reloading = false
  oSub: Subscription
  session: User
  user$: Observable<User>
  id: string

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private chatService: ChatService) { }

  ngOnInit(): void {
    this.reloading = true
    this.oSub = this.loginService.getUser().subscribe(user =>{
      this.session = user
      this.reloading = false
    }) 

    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id
      this.user$ = this.chatService.getInterlocutor(this.id)
    }) 
  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
  }

}
