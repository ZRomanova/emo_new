import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event, User, Institution, BotButton } from '../../shared/interfaces';
import { LoginService } from 'src/app/shared/services/login.service';
import { EventsService } from 'src/app/shared/services/events.service';
import { Observable, of } from 'rxjs';
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
export class AdminEventsFormComponent implements OnInit {

  form: FormGroup
  id: string
  image: File
  imagePreview = ''
  event: Event
  session$: Observable<User>
  users$: Observable<User[]>
  institutions$: Observable<Institution[]>
  buttons$: Observable<BotButton[]>
  queryI = ''
  whomShow = 0
  wait: string[]
  now: Date



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
      this.users$ = this.picturesService.users(queryParam.institution)
      this.queryI = queryParam.institution
    }) 

    this.institutions$ = this.usersService.getInstitutions()

    this.buttons$ = this.botService.fetch()

    this.form = new FormGroup({
      date: new FormControl(formatDate(null, 'yyyy-MM-ddThh:mm', 'en')),
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      address: new FormControl(null),
      cost: new FormControl(null),
      chatImage: new FormControl(null),
      institution: new FormControl(null),
      whomShow: new FormControl(0)
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
              date: event.date,
              type: event.type,
              description: event.description,
              address: event.address,
              cost: event.cost
            })
            this.imagePreview = event.chatImage
            this.wait = event.wait
          }
          this.form.enable()
        },
        error => console.log(error)
      )
  }

  changeInstitution() {
    let id = this.form.value.institution
    this.router.navigate([], {queryParams: { 'institution': id }})
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

    this.eventsService.update(this.id, 
      null, 
      null, 
      this.wait, 
      this.form.value.date,
      this.form.value.discription,
      this.form.value.address,
      this.image,
      this.form.value.cost)
    .subscribe(event => {
      this.event = event
      this.form.enable()
    },
    error => console.log(error))
  }
}
