import {Component, OnInit} from '@angular/core'
import {LoginService} from './shared/services/login.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit{

  oSub$: Subscription
  
  constructor(private auth: LoginService) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token')
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken)
    }
  }

}
