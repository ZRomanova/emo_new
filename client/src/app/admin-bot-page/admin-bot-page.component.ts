import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, BotButton } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { BotService } from '../shared/services/bot.service';

@Component({
  selector: 'app-admin-bot-page',
  templateUrl: './admin-bot-page.component.html',
  styleUrls: ['./admin-bot-page.component.css']
})
export class AdminBotPageComponent implements OnInit {

  session$: Observable<User>
  buttons$: Observable<BotButton[]>

  constructor(private loginService: LoginService,
              private botService: BotService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()

    this.buttons$ = this.botService.fetch()
  }

}
