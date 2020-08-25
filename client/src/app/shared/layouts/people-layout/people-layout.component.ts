import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-people-layout',
  templateUrl: './people-layout.component.html',
  styleUrls: ['./people-layout.component.css']
})
export class PeopleLayoutComponent implements OnInit {

  oSub: Subscription
  color1: string
  color2: string
  online: boolean
  reloading: boolean = false
  photo: string
  setting: number
  levelStatus: number
  name: string

  constructor(
    private router: Router,
    private loginService: LoginService,
    private auth: LoginService,
    private navService: NavService) {
      this.navService.fColor.subscribe(color => this.color1 = color)
      this.navService.sColor.subscribe(color => this.color2 = color)
      this.navService.newOnlane.subscribe(online => {
        this.online = online
        if (online == 'false') document.getElementById('online_me').style.display = 'none'
        else document.getElementById('online_me').style.display = 'block'
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
      this.reloading = false
    })
  }

  logout(event: Event) {
    let oSub = this.loginService.exit().subscribe()
    oSub.unsubscribe()
    event.preventDefault()
    this.loginService.logout()
    this.router.navigate(['/login'])
  }

}
