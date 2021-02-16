import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  session: User
  reloading = false
  obs$: Subscription

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloading = true
    this.obs$ = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.reloading = false
    })
  }

  goToEmoBot() {
    this.router.navigate([`/emo`])
  }

}
