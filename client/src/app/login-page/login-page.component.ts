import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {LoginService} from '../shared/services/login.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        //MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')
      } else if (params['accessDenied']) {
        //MaterialService.toast('Для начала авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
        //MaterialService.toast('Пожалуйста войдите в систему заного')
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }    
  }

  onSubmit() {
    this.form.disable() 

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/people/friends']),
      error => {
        console.log(error)
        this.form.enable()
      }
    )
  }

}
