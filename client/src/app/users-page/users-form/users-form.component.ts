import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { Observable, of, Subscription } from 'rxjs';
import { Institution, User } from 'src/app/shared/interfaces';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { LoginService } from 'src/app/shared/services/login.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
  providers:[DatePipe]
})
export class UsersFormComponent implements OnInit, OnDestroy {

  form: FormGroup
  whatDo = ''
  image: File
  imagePreview = ''
  institutions$: Observable<Institution[]>
  user: User
  session: User
  id: string
  userInstitution = ''
  startL = ''
  endL = ''
  months = [
    {num: '1', name: 'январь'}, 
    {num: '2', name: 'февраль'},
    {num: '3', name: 'март'},
    {num: '4', name: 'апрель'},
    {num: '5', name: 'май'},
    {num: '6', name: 'июнь'},
    {num: '7', name: 'июль'},
    {num: '8', name: 'август'},
    {num: '9', name: 'сентябрь'},
    {num: '10', name: 'октябрь'},
    {num: '11', name: 'ноябрь'},
    {num: '12', name: 'декабрь'}
  ]

  days = []
  colors = []
  dateFromServer = []
  birthday: Date
  imageText = ''
  first: number
  oSub: Subscription
  reloading: boolean = false

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private loginService: LoginService,
              private router: Router,
              public datePipe : DatePipe,
              private navService: NavService) { }

  ngOnInit(): void {
    for(let i = 1; i < 32; i++) {
      this.days.push(i)
    }

    for(let i = 1; i < 8; i++) {
      this.colors.push(i)
    }

    this.route.params.subscribe(() => {
      this.institutions$ = this.usersService.getInstitutions()
    })

    this.reloading = true
    this.oSub = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.id = user._id
      this.reloading = false
    })
     
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl(''),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      sex: new FormControl('1'),
      status: new FormControl('3'),
      photo: new FormControl(null),
      institution: new FormControl(null, Validators.required),

      online: new FormControl('false'),
      Text: new FormControl('false'),
      read: new FormControl('false'),
      surnameView: new FormControl('false'),
      setting: new FormControl('1'),
      vote: new FormControl('false'),
      sentence: new FormControl('false'),
      answers: new FormControl('false'),
      change: new FormControl('true'),
      defaultColor: new FormControl('grey'),
      birthdays: new FormControl('false'),
      first: new FormControl('5'),
      second: new FormControl('1'),

      day: new FormControl('0'),
      month: new FormControl('0'),
      year: new FormControl('', [Validators.minLength(4), Validators.maxLength(4)])
    }) 
    this.imagePreview = '/uploads/images/boy.png'

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            this.whatDo = params['id']
            if (this.whatDo !== 'new') {
              return this.usersService.getById(this.whatDo)
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (user: User) => {
          if (user) {
            this.user = user
            this.form.patchValue({
              login: user.login,
              name: user.name,
              surname: user.surname,
              text: user.text,
              sex: user.sex.toString(),
              status: user.levelStatus.toString(),
              institution: user.institution,

              online: user.online.toString(),
              Text: user.text.toString(),
              read: user.read.toString(),
              surnameView: user.surnameView.toString(),
              setting: user.setting.toString(),
              vote: user.vote.toString(),
              sentence: user.sentence.toString(),
              answers: user.answers.toString(),
              change: user.change.toString(),
              defaultColor: user.defaultColor,
              birthdays: user.birthdays.toString(),
              first: user.firstColor.toString(),
              second: user.secondColor.toString()
            })
            this.startL = user.login
            this.imagePreview = user.photo
            this.first = +user.firstColor
            if (this.imagePreview == '/uploads/images/boy.png') this.imageText = '/uploads/images/boy.png'
            if (this.imagePreview == '/uploads/images/girl.png') this.imageText = '/uploads/images/girl.png'
            this.userInstitution = user.institution.toString()
            if (user.birthDate) {
              let date = this.datePipe.transform(user.birthDate, "dd,MM,yyyy") 
              this.dateFromServer = date.split(',')
              let day = +this.dateFromServer[0]
              let month = +this.dateFromServer[1]
              this.form.patchValue({
                day: day.toString(),
                month: month.toString(),
                year: this.dateFromServer[2].toString()
              })
            }
            
          }

          this.form.enable()
        },
        error => {console.log(error)}
      )

  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
  }

  changeSex() {
    if ((this.imagePreview == '/uploads/images/boy.png') || (this.imagePreview == '/uploads/images/girl.png')) {
      if (this.form.value.sex == '1') {
        this.imagePreview = '/uploads/images/boy.png'
        this.imageText = '/uploads/images/boy.png'
      }
      else {
        this.imagePreview = '/uploads/images/girl.png'
        this.imageText = '/uploads/images/girl.png'
      }
    }
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

  validationDate() {
    if ((this.form.value.day == '0') || (this.form.value.month == '0') || (this.form.value.year == '')) {
      return true
    }
    else {
      if (+this.form.value.year > 1910) {
        let date = this.form.value.year + '-' + this.form.value.month + '-' + this.form.value.day
        let dateFromUser = new Date(date)
        if (dateFromUser) {
          let now = new Date()
          return now > dateFromUser
        } else {
          return false
        }     
      } else {
        return false
      }
    }
  }

  sendToParent(color: string) {
    this.navService.sendColor(color)
  }

  onSubmit() {
    this.form.disable()
    const valid = this.validationDate()
    if (valid) {
      if ((this.form.value.day != null) && (this.form.value.month != null) && (this.form.value.year != '')) {
        let date = this.form.value.year + '-' + this.form.value.month + '-' + this.form.value.day
        this.birthday = new Date(date)
      }

      let obs$

      if (this.whatDo === 'new') {
        obs$ = this.usersService.create(
          this.form.value.login,
          this.form.value.name,
          this.form.value.surname,
          this.form.value.sex,
          this.form.value.institution,
          this.form.value.status,
          this.form.value.password,
          this.birthday,
          this.image,
          this.form.value.online,
          this.form.value.Text,
          this.form.value.read,
          this.form.value.first,
          this.form.value.second,
          this.form.value.surnameView,
          this.form.value.setting,
          this.form.value.vote,
          this.form.value.sentence,
          this.form.value.answers,
          this.form.value.change,
          this.form.value.defaultColor,
          this.form.value.birthdays
        )
      } else {
        this.endL = this.form.value.login
        let changeL 
        if (this.endL == this.startL) changeL = false
        else changeL = true

        /*
        if ((this.imagePreview == '/uploads/images/boy.png') && (this.form.value.sex == '2')) {
          this.imageText ='/uploads/images/girl.png'
        }
        if ((this.imagePreview == '/uploads/images/girl.png') && (this.form.value.sex == '1')) {
          this.imageText = '/uploads/images/boy.png'
        }
        */
        if (this.image) this.imageText = ''

        obs$ = this.usersService.update(
          this.whatDo,
          changeL,
          this.form.value.login,
          this.form.value.name,
          this.form.value.surname,
          this.form.value.sex,
          this.form.value.institution,
          this.form.value.status,
          this.form.value.password,
          this.birthday,
          this.image,
          this.imageText,
          this.form.value.online,
          this.form.value.Text,
          this.form.value.read,
          this.form.value.first,
          this.form.value.second,
          this.form.value.surnameView,
          this.form.value.setting,
          this.form.value.vote,
          this.form.value.sentence,
          this.form.value.answers,
          this.form.value.change,
          this.form.value.defaultColor,
          this.form.value.birthdays
        )
      }
      obs$.subscribe(
        user => {
          this.user = user
          this.form.enable()
          if (this.first != +this.form.value.first && this.id == this.whatDo) {
            this.sendToParent(this.form.value.first)
          }
          this.router.navigate([`/manage/users`])
        },
        error => {
          console.log(error.error.message)
          this.form.enable()
        },
        () => {this.form.enable()}
      )
    }
    else {
      console.log('Неверная дата')
      this.form.enable()
    }
  }

}


