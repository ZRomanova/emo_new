import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/interfaces';
import { LoginService } from '../shared/services/login.service';
import { PeopleService } from '../shared/services/people.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NavService } from '../shared/services/nav.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit, OnDestroy {

  oSub: Subscription
  reloading: boolean = false
  session: User
  form: FormGroup
  colors = []

  constructor(private loginService: LoginService,
              private navService: NavService,
              private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.reloading = true
    this.oSub = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.form = new FormGroup({
        online: new FormControl(this.session.online.toString()),
        Text: new FormControl(this.session.text.toString()),
        read: new FormControl(this.session.read.toString()),
        surnameView: new FormControl(this.session.surnameView.toString()),
        vote: new FormControl(this.session.vote.toString()),
        sentence: new FormControl(this.session.sentence.toString()),
        answers: new FormControl(this.session.answers.toString()),
        change: new FormControl(this.session.change.toString()),
        defaultColor: new FormControl(this.session.defaultColor),
        birthdays: new FormControl(this.session.birthdays.toString()),
        first: new FormControl(this.session.firstColor.toString()),
        second: new FormControl(this.session.secondColor.toString())
      }) 
      this.reloading = false
    })

    for(let i = 1; i < 8; i++) {
      this.colors.push(i)
    }

  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
  }

  sendToParent(color1: string, color2: string, online: string, color: string) {
    this.navService.sendToPeople(color1, color2, online, color)
  }

  newRole(role: string) {
    let str
    if (role == '5') str = 'взрослым'
    else str = 'подопечным'
    const decision = window.confirm(`Вы уверены, что хотите стать ${str}?`)

    if (decision) {
      this.peopleService.newRole(role)
        .subscribe(
          user => {
            this.session = user
            this.form.enable()
          },
          error => {
            console.log(error.error.message)
            this.form.enable()
          }
        )
    }
  }

  onSubmit() {
    this.form.disable()
    let obs$
    obs$ = this.peopleService.update(
      this.form.value.online,
      this.form.value.Text,
      this.form.value.read,
      this.form.value.first,
      this.form.value.second,
      this.form.value.surnameView,
      this.form.value.vote,
      this.form.value.sentence,
      this.form.value.answers,
      this.form.value.change,
      this.form.value.defaultColor,
      this.form.value.birthdays
    )
    obs$.subscribe(
      user => {
        this.session = user
        this.sendToParent(this.form.value.first, this.form.value.second, this.form.value.online, this.form.value.defaultColor)
        this.form.enable()
      },
      error => {
        console.log(error.error.message)
        this.form.enable()
      }
    )
  }

}
