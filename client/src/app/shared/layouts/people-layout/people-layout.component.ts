import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-people-layout',
  templateUrl: './people-layout.component.html',
  styleUrls: ['./people-layout.component.css']
})
export class PeopleLayoutComponent implements OnInit{

  oSub: Subscription
  logSub: Subscription
  color1: string
  color2: string
  online: boolean
  reloading: boolean = false
  photo: string
  id: string
  setting: number
  levelStatus: number
  name: string
  color: string
  events: boolean

  constructor(
    private router: Router,
    private loginService: LoginService,
    private auth: LoginService,
    private navService: NavService,
    private chatService: ChatService) {
      this.navService.fColor.subscribe(color => this.color1 = color)
      this.navService.sColor.subscribe(color => this.color2 = color)
      this.navService.newDefColor.subscribe(color => this.color = color)
      this.navService.newOnlane.subscribe(online => {
        this.online = online
        if (online == 'false') this.online = false
        else this.online = true
      })
     }

  ngOnInit(): void {
    this.reloading = true
    this.oSub = this.auth.getUser().subscribe(user => {
      this.color1 = user.firstColor
      this.color2 = user.secondColor
      this.online = user.online
      this.photo = user.photo
      this.setting = user.setting
      this.levelStatus = user.levelStatus
      this.name = user.name
      this.id = user._id
      this.color = user.defaultColor
      this.reloading = false
      this.events = user.events
    })
  }

  goToChat(id: string, color: string) {
    this.chatService.goToChat(id, color)
  }

  logout(event: Event) {
    this.logSub = this.loginService.exit().subscribe()
    this.logSub.unsubscribe()
    event.preventDefault()
    this.loginService.logout()
    this.router.navigate(['/login'])
  }

}
