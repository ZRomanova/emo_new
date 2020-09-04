import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { User, Message, Messages } from '../../interfaces';
import { ChatService } from '../../services/chat.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { SocketioService } from '../../services/socketio.service';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit, OnDestroy {

  reloading = false
  oSub: Subscription
  session: User
  user$: Observable<User>
  messages$: Subscription
  id: string
  textarea = ''
  newMessages: Message[] = []
  zoom = false
  image = ''
  deleteMessage = false
  deleteID: Message
  letters: Messages
  mesloading = false
  withAnswers = []
  answerFor = ''

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private chatService: ChatService,
              private navService: NavService,
              private socketService: SocketioService,
              private router: Router) {
                this.socketService.newMessage.subscribe(message => {
                  if (message.sender == this.id) {
                    this.newMessages.push(message)
                    for (let src of message.message) {
                      let path = src.split('/')
                      if (path[0] == 'uploads') {
                        let picture = path[1].split('.')
                        this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                          if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
                        },
                        error => {
                          console.log(error)
                        })
                      }
                    }
                  }
                })
               }

  ngOnInit(): void {
    this.reloading = true
    this.mesloading = true
    this.oSub = this.loginService.getUser().subscribe(user =>{
      this.session = user
      this.socketService.setupSocketConnection(user._id)
      this.reloading = false
    }) 

    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id
      this.user$ = this.chatService.getInterlocutor(this.id)
      this.messages$ = this.chatService.getMessages(this.id).subscribe(messages => {
        this.letters = messages
        for (let message of messages.messagesRead) {
          for (let src of message.message) {
            let path = src.split('/')
            if (path[0] == 'uploads') {
              let picture = path[1].split('.')
              this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
              },
              error => {
                console.log(error)
              })
            }
          }
        }
        for (let message of messages.messagesNotRead) {
          for (let src of message.message) {
            let path = src.split('/')
            if (path[0] == 'uploads') {
              let picture = path[1].split('.')
              this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
                if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
              },
              error => {
                console.log(error)
              })
            }
          }
        }
        this.mesloading = false
      })
    }) 
  }

  getAnswers(src: string): boolean {
    let path = src.split('/')
    let picture = path[1].split('.')
    let ret
    this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
      console.log(answers)
      if (answers.answers == []) ret = false
      else ret = true
    },
    error => {
      console.log(error)
      ret = false
    })
    return ret
  }

  newText() {
    if (this.textarea.trim()) {
      this.navService.sendTextMessage(this.textarea, 2)
      this.textarea = ''
    }
  }

  newMessageFromMe(message) {
    this.newMessages.push(message)
  }

  clearChat(clear) {
    if (clear) {
      this.letters.messagesRead = []
      this.letters.messagesNotRead = []
      this.newMessages = []
    }
  }

  openZoom(src) {
    this.image = src
    this.zoom = true
  }

  closeZoom(result) {
    if (result) this.zoom = false
  }

  openDeleteMessage(data) {
    this.deleteID = data
    this.deleteMessage = true
  }

  closeDeleteMessage(result) {
    if (result) {
      this.chatService.deleteOneMessage(this.deleteID._id).subscribe(message => {
        document.getElementById(this.deleteID._id).remove()
      })
    }
    this.deleteMessage = false
  }

  openAnswers (ans) {
    this.answerFor = ans
  }

  closeAnswers(close) {
    if (close) this.answerFor = ''
  }

  checkAnswer(meta) {
    if (meta[1]) {
      this.route.queryParams.subscribe((queryParam: any) => {
        let queryC = queryParam.color
        this.router.navigate([], {queryParams: {'folder': meta[0], 'color': queryC}})
      })
    }
    else {
      this.navService.sendTextMessage(meta[0], 1)
    }
    this.answerFor = ''
  }

  ngOnDestroy() {
    this.socketService.disconnectSocket(this.session._id)
    this.oSub.unsubscribe()
  }

}
