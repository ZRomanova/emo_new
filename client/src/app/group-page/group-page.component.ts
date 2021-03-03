import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User, PictureAndFolder, GroupMessage} from '../shared/interfaces';
import { ChatService } from '../shared/services/chat.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavService } from '../shared/services/nav.service';
import { SocketioService } from '../shared/services/socketio.service';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css'],
  animations: [
    trigger('all', [
      state('nosentence', style({
        width: '98%',
        fontSize: '0.7cm'
      })),
      state('sentence', style({
        width: '75%',
        fontSize: '0.525cm'
      })),
      transition('nosentence <=> sentence', animate(500))
    ]),
    trigger('button', [
      state('nosentence', style({
        right: '2%',
        position: 'fixed'
      })),
      state('sentence', style({
        right: '19%',
        position: 'fixed'
      })),
      transition('nosentence <=> sentence', animate(500))
    ])
  ]
})
export class GroupPageComponent implements OnInit, OnDestroy {

  @Input() session: User
  @Output() newMessage = new EventEmitter<GroupMessage>()
  @Output() deleteAll = new EventEmitter<boolean>()

  allState = 'nosentence'
  buttonsState = 'nosentence'

  oSub: Subscription
  mSub: any
  eventID: string
  event: Subscription
  id: string
  pictureAndFolder: PictureAndFolder
  queryF = ''
  queryC = ''
  reloading = false
  form: FormGroup
  files: File[]
  deletePicture = false
  image = ''
  deletingElement = ''
  sentenceToggle = false
  types: number[] = []
  messages: string[] = []
  record = false

  constructor(private chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavService,
    private socketService: SocketioService,
    private eventsService: EventsService) {
      this.mSub = this.navService.textMessage.subscribe(message => {
        this.makeMessage(message[1], message[0])
      })
    }

  ngOnInit(): void {
    this.reloading = true
    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id

      this.event = this.eventsService.getById(this.id).subscribe(event => {
        this.eventID = event._id

        this.route.queryParams.subscribe((queryParam: any) => {
          this.queryC = queryParam.color
          this.queryF = queryParam.folder
          this.oSub = this.chatService.getPictures(this.queryF).subscribe(pictureAndFolder =>{
            this.pictureAndFolder = pictureAndFolder
            this.sortPictures()
          })
        }) 
      })
    }) 
    this.form = new FormGroup({
      files: new FormControl(null)
    })
  }

  sortPictures() {
    for (let picture of this.pictureAndFolder.pictures) {
      if (picture.invisible === picture.exceptions.includes(this.session._id)) {
        picture.show = true
        if (picture._id == '603e1a6f0c54fc9b6e417950') {
          picture.src = this.session.photo
          if (picture.text) picture.textInHTML = picture.text
          else if (picture.textForGirls) picture.textInHTML = picture.textForGirls
        }
        else {
          if (this.pictureAndFolder.folder.many == 0) {
            picture.src = picture.boysGreyPicture
            if (picture.text) picture.textInHTML = picture.text
          }
          else {
            if (this.session.sex == 1) {
              if (picture.text) picture.textInHTML = picture.text
              else if (picture.textForGirls) picture.textInHTML = picture.textForGirls

              if (this.queryC == 'grey') {
                if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
              }
              else {
                if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
              }
            }
            else {
              if (picture.textForGirls) picture.textInHTML = picture.textForGirls
              else if (picture.text) picture.textInHTML = picture.text

              if (this.queryC == 'grey') {
                if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
              }
              else {
                if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
              }
            }
          }
        }
      }
    }
    this.reloading = false
  }

  makeMessage(type: number, message: string) {
    if (this.sentenceToggle) {
      this.types.push(type)
      this.messages.push(message)
    }
    else {
      const types = [type]
      const messages = [message]
      this.chatService.sendGroupMessage(this.eventID, messages, types).subscribe(
        message => {
          this.socketService.sendMessageGroup(this.eventID, message)

          this.newMessage.emit(message)
        },
        error => console.log(error)
      )
    }
  }

  sendSentence() {
    if (this.messages != []) {
      this.chatService.sendGroupMessage(this.eventID, this.messages, this.types).subscribe(
        message => {
          if (this.eventID != this.session._id) {
            this.socketService.sendMessageGroup(this.eventID, message)
          }
          this.newMessage.emit(message)
          this.messages = []
          this.types = []
        },
        error => console.log(error)
      )
    }
  }

  cross() {
    if (this.queryF == '603df642e8189fa35e95273f') {
      this.router.navigate(['/people/events'])
    }
    else {
      this.router.navigate([], {queryParams: {'folder': this.pictureAndFolder.folder.parent, 'color': this.queryC}})
    }
  }

  newFolder(id) {
    this.router.navigate([], {queryParams: {'folder': id, 'color': this.queryC}})
  }

  newColor(color) {
    this.router.navigate([], {queryParams: {'folder': this.queryF, 'color': color}})
  }

  changeSentence() {
    if (this.sentenceToggle) {
      this.sentenceToggle = false
      this.allState = 'nosentence'
      this.buttonsState = 'nosentence'
    }
    else {
      this.allState = 'sentence'
      this.buttonsState = 'sentence'
      this.sentenceToggle = true
    }
  }

  onFileUpload(event: any) {
    const files = event.target.files
    this.form.disable()
    this.chatService.newFilesInGroup(files).subscribe(
      message => this.form.enable(),
      error => {
        console.log(error.error.message)
        this.form.enable()
      }      
    )
  }

  fromDeletePicture(result: boolean) {
    if (result) {
      this.chatService.deletePicture(this.deletingElement).subscribe(message => {
        document.getElementById(this.deletingElement).remove()
        this.deletingElement = ''
        this.deletePicture = false
      },
      error => {
        console.log(error)
        this.deletePicture = false
      }
      )
    }
    else {
      this.deletePicture = false
    }
  }

  wantDeletePicture(src: string, id: string) {
    this.image = src
    this.deletingElement = id
    this.deletePicture = true
  }

  wantRecordAudio() {
    this.record = true
  }

  clearSentence() {
    this.messages = []
    this.types = []
  }

  newVote(audio) {
    this.record = false
    if (audio[0]) {
      if (audio[1]) {
        this.makeMessage(3, audio[2].boysGreyPicture)
      }
      if (this.queryF == '603e1ba10c54fc9b6e417955') {
        audio[2].textInHTML = audio[2].text
        audio[2].src = audio[2].boysGreyPicture
        this.pictureAndFolder.pictures.unshift(audio[2])
      }
    }
  }

  ngOnDestroy() {
    this.oSub.unsubscribe()
    this.event.unsubscribe()
    this.mSub.unsubscribe()
  }
}