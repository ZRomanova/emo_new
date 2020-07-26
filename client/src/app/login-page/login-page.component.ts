import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

import {LoginService} from '../shared/services/login.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup

  constructor(private auth: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

  }

  onSubmit() {
    this.form.disable() 

    this.auth.login(this.form.value).subscribe(
      () => console.log('Login success'),
      error => {
        console.log(error)
        this.form.enable()
      }
    )
  }

}
