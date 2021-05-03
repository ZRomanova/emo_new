import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, User, BotButton, Institution } from '../../shared/interfaces';
import { EventsService } from 'src/app/shared/services/events.service';
import { FormGroup, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { BotService } from 'src/app/shared/services/bot.service';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/app/shared/services/people.service';

@Component({
  selector: 'app-event-in-group-form',
  templateUrl: './event-in-group-form.component.html',
  styleUrls: ['./event-in-group-form.component.css']
})
export class EventInGroupFormComponent implements OnInit {

  @Input() group: Event
  @Input() session: User
  @Output() result = new EventEmitter<boolean>()
  @Output() newEvent = new EventEmitter<Event>()

  form: FormGroup
  imagePreview = ''
  buttons$: Observable<BotButton[]>
  users$: Observable<User[]>
  institutions$: Observable<Institution[]>
  image: File

  constructor(private botService: BotService,
    private peopleService: PeopleService,
    private eventsService: EventsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(null),
      type: new FormControl(this.group.type),
      description: new FormControl(this.group.description),
      address: new FormControl(this.group.address),
      cost: new FormControl(this.group.cost),
      chatImage: new FormControl(null),
      institution: new FormControl(this.session.institution)
    })

    if (this.group.date) this.form.patchValue({date: formatDate(this.group.date, 'yyyy-MM-ddThh:mm', 'en')})

    this.imagePreview = this.group.chatImage

    this.institutions$ = this.peopleService.getInstitutions()

    this.buttons$ = this.botService.fetch()

    this.users$ = this.peopleService.fetchAll(this.session.institution)

  }

  close() {
    this.result.emit(true)
  }

  changeInstitution() {
    this.users$ = this.peopleService.fetchAll(this.form.value.institution)
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

  update() {
    this.form.disable()

    this.eventsService.update(this.group._id, 
      null, 
      null, 
      null, 
      this.form.value.date,
      this.form.value.description,
      this.form.value.address,
      this.image,
      this.form.value.cost)
    .subscribe(event => {
      this.form.enable()
      this.newEvent.emit(event)
      this.result.emit(true)
    },
    error => console.log(error))
  }

}
