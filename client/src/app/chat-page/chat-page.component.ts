import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User, PictureAndFolder, Message } from '../shared/interfaces';
import { ChatService } from '../shared/services/chat.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavService } from '../shared/services/nav.service';
import { SocketioService } from '../shared/services/socketio.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
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
export class ChatPageComponent implements OnInit, OnDestroy {

  @Input() session: User
  @Output() newMessage = new EventEmitter<Message>()
  @Output() deleteAll = new EventEmitter<boolean>()

  allState = 'nosentence'
  buttonsState = 'nosentence'

  interlocutor: Subscription
  oSub: Subscription
  interlocutorSex: number
  interlocutorID: string
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
  deleteChat = false
  record = false

  constructor(private chatService: ChatService,
              private route: ActivatedRoute,
              private router: Router,
              private navService: NavService,
              private socketService: SocketioService) {
                this.navService.textMessage.subscribe(message => {
                  this.makeMessage(message[1], message[0])
                })
               }

  ngOnInit(): void {
    this.reloading = true
    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id

      this.interlocutor = this.chatService.getInterlocutor(this.id).subscribe(user => {
        this.interlocutorSex = user.sex
        this.interlocutorID = user._id

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
        if (picture._id == '5f130939962c2f062467f853') {
          picture.src = this.session.photo
          if (picture.text) picture.textInHTML = picture.text
          else if (picture.textForGirls) picture.textInHTML = picture.textForGirls
        }
        else {
          if (this.pictureAndFolder.folder.many == 0) {
            picture.src = picture.boysGreyPicture
            if (picture.text) picture.textInHTML = picture.text
          }
          else if (this.pictureAndFolder.folder.many == 1) {
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
          else {
            if (this.interlocutorSex == 1) {
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
      this.chatService.sendMessage(this.interlocutorID, messages, types).subscribe(
        message => {
          if (this.interlocutorID != this.session._id) {
            this.socketService.sendMessage(this.interlocutorID, message)
          }
          this.newMessage.emit(message)
        },
        error => console.log(error)
      )
    }
  }

  sendSentence() {
    if (this.messages != []) {
      this.chatService.sendMessage(this.interlocutorID, this.messages, this.types).subscribe(
        message => {
          if (this.interlocutorID != this.session._id) {
            this.socketService.sendMessage(this.interlocutorID, message)
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
    if (this.queryF == '5f12ff8cc06cd105437d84e3') {
      this.router.navigate(['/people/friends'])
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
    this.chatService.newFiles(files).subscribe(
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

  fromDeleteChat(result: boolean) {
    if (result) {
      this.chatService.deleteAllMessages(this.interlocutorID).subscribe(message => {
        this.deleteAll.emit(true)
      })
    }
    this.deleteChat = false
  }

  wantDeletePicture(src: string, id: string) {
    this.image = src
    this.deletingElement = id
    this.deletePicture = true
  }

  wantDeleteChat() {
    this.deleteChat = true
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
      if (this.queryF == '5f5486f982194ca1fb21ff6d') {
        audio[2].textInHTML = audio[2].text
        audio[2].src = audio[2].boysGreyPicture
        this.pictureAndFolder.pictures.unshift(audio[2])
      }
    }
  }

  ngOnDestroy() {
    this.interlocutor.unsubscribe()
    this.oSub.unsubscribe()
  }

}
