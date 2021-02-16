import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { User } from '../../interfaces';
import { LoginService } from '../../services/login.service';

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
  messages$: Subscription
  id: string
  textarea = ''
  zoom = false
  mesloading = false
  image = ''

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.reloading = true
    this.oSub = this.loginService.getUser().subscribe(user =>{
      this.session = user
      this.reloading = false
    })
  }

  openZoom(src) {
    this.image = src
    this.zoom = true
  }

  closeZoom(result) {
    if (result) this.zoom = false
  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
  }

}
