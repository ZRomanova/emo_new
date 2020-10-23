import {Component, OnInit, OnDestroy} from '@angular/core'
import {LoginService} from './shared/services/login.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit, OnDestroy {

  oSub$: Subscription
  
  constructor(private auth: LoginService) {
  }

  ngOnInit() {
    const potentialToken = localStorage.getItem('auth-token')
    if (potentialToken !== null) {
      this.auth.setToken(potentialToken)

      this.exit()
    }
  }

  exit() {
    var IDLE_TIMEOUT = 60; //seconds
    var _idleSecondsCounter = 0;
    document.onclick = function() {
        _idleSecondsCounter = 0;
    };
    document.onmousemove = function() {
        _idleSecondsCounter = 0;
    };
    document.onkeypress = function() {
        _idleSecondsCounter = 0;
    };
    window.setInterval(CheckIdleTime, 1000);
    //window.onbeforeunload = this.logout

    function CheckIdleTime() {
      _idleSecondsCounter++;
      if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        this.logout()
      }
    }

  }

  logout() {
    this.oSub$ = this.auth.exitTimout().subscribe()
  }

  ngOnDestroy() {
    this.oSub$.unsubscribe()
  }
}
