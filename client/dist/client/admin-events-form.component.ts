import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event, User, Institution, BotButton } from '../../shared/interfaces';
import { LoginService } from 'src/app/shared/services/login.service';
import { EventsService } from 'src/app/shared/services/events.service';
import { Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PicturesService } from 'src/app/shared/services/pictures.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { formatDate } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { BotService } from 'src/app/shared/services/bot.service';

@Component({
  selector: 'app-admin-events-form',
  templateUrl: './admin-events-form.component.html',
  styleUrls: ['./admin-events-form.component.css']
})
export class AdminEventsFormComponent implements OnInit, OnDestroy {

  form: FormGroup
  id: string
  image: File
  photolikes: File[] = []
  imagePreview = ''
  event: Event
  session$: Observable<User>
  users$: Subscription
  users: User[]
  institutions$: Observable<Institution[]>
  buttons$: Observable<BotButton[]>
  queryI = ''
  whomShow = 0
  wait: string[]
  now: Date
  photolikesPreview: string[] = []
  queryS: string = 'view'



  constructor(private loginService: LoginService,
              private eventsService: EventsService,
              private picturesService: PicturesService,
              private route: ActivatedRoute,
              private router: Router,
              private botService: BotService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.now = new Date()

    this.session$ = this.loginService.getUser()

    this.route.queryParams.subscribe((queryParam: any) => {
      this.users$ = this.picturesService.users(queryParam.institution).subscribe(users => {
        this.users = users
      })
      this.queryI = queryParam.institution
      this.queryS = queryParam.status
    }) 

    this.institutions$ = this.usersService.getInstitutions()

    this.buttons$ = this.botService.fetch()

    this.form = new FormGroup({
      date: new FormControl(null),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      address: new FormControl(null),
      cost: new FormControl(null),
      chatImage: new FormControl(null),
      institution: new FormControl(null),
      whomShow: new FormControl(0),
      chatTitle: new FormControl(null),
      photolikesImage: new FormControl(null)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            this.id = params['id']
            if (this.id) return this.eventsService.getById(this.id)
            return of(null)
          }
        )
      )
      .subscribe(
        (event: Event) => {
          if (event) {
            this.event = event
            this.form.patchValue({
              type: event.type,
              description: event.description,
              address: event.address,
              cost: event.cost,
              chatTitle: event.chatTitle
            })
            if (event.date) this.form.patchValue({date: formatDate(event.date, 'yyyy-MM-ddTHH:mm', 'en')})
            this.imagePreview = event.chatImage
            this.wait = event.wait
            if (event.photolikes) this.photolikesPreview = event.photolikes
          }
          this.form.enable()
        },
        error => console.log(error)
      )
  }

  changeInstitution() {
    let id = this.form.value.institution
    this.router.navigate([], {queryParams: { 'institution': id, 'status': this.queryS}})
    this.queryI = id
  }

  changeWhomShow() {
    this.whomShow = this.form.value.whomShow
  }

  checkUser(id) {
    if (this.wait.includes(id)) {
      let index = this.wait.indexOf(id, 0)
      this.wait.splice(index, 1)
    }
    else {
      this.wait.push(id)
    }
  }

  checkAll() {
    for (let user of this.users) {
      this.wait.push(user._id)
    }
  }

  checkNobody() {
    for (let user of this.users) {
      let index = this.wait.indexOf(user._id, 0)
      if (index != -1) this.wait.splice(index, 1)
    }
  }

  onPhotolikesUpload(event: any) {
    const files = event.target.files
    this.photolikes = files
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

  mailing() {
    this.form.disable()

    this.eventsService.update(this.id, null, 1)
    .subscribe(event => {
      this.event = event
      this.form.enable()
    },
    error => console.log(error))
  }

  complate() {
    this.form.disable()

    this.eventsService.update(this.id, null, 2)
    .subscribe(event => {
      this.event = event
      this.form.enable()
    },
    error => console.log(error))
  }

  reject() {
    this.form.disable()

    this.eventsService.update(this.id, null, -1)
    .subscribe(event => {
      this.event = event
      this.form.enable()
    },
    error => console.log(error))
  }

  onSubmit() {
    this.form.disable()

    this.eventsService.update(this.id, 
      null, 
      null, 
      this.wait, 
      this.form.value.date ? (new Date(this.form.value.date)).toISOString() : null,
      this.form.value.description,
      this.form.value.address,
      this.image,
      this.form.value.cost,
      this.form.value.chatTitle,
      this.photolikes)
    .subscribe(event => {
      this.event = event
      this.photolikesPreview = event.photolikes
      this.photolikes = []
      this.form.enable()
    },
    error => console.log(error))
  }

  ngOnDestroy() {
    this.users$.unsubscribe()
  }
}
