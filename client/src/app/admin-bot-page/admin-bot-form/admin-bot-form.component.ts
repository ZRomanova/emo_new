import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, BotButton } from 'src/app/shared/interfaces';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BotService } from 'src/app/shared/services/bot.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-bot-form',
  templateUrl: './admin-bot-form.component.html',
  styleUrls: ['./admin-bot-form.component.css']
})
export class AdminBotFormComponent implements OnInit {

  form: FormGroup
  id: string
  session$: Observable<User>
  image: File
  imagePreview = ''

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router,
              private botService: BotService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()
    this.form = new FormGroup({
      img: new FormControl(null, Validators.required),
      text: new FormControl('', Validators.required)
    })
    this.form.disable()
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            this.id = params['id']
            if (this.id !== 'new') {
              return this.botService.getById(this.id)
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (button: BotButton) => {
          if (button) {
            this.form.patchValue({text: button.text})
            this.imagePreview = button.img
          } 
        }
      )
      this.form.enable()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    this.form.disable()

    let obs$

    if (this.id === 'new') {
      obs$ = this.botService.create(
        this.image,
        this.form.value.text
      )
    }
    else {
      obs$ = this.botService.update(
        this.id,
        this.image,
        this.form.value.text
      )
    }

    obs$.subscribe(
      button => {
        this.form.enable()
        this.router.navigate(['/manage/emo'])
      },
      error => {
        alert(error.error.message)
        this.form.enable()
      },
      () => {this.form.enable()}
    )
  }

}
