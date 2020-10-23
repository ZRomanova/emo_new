import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { User, Message, Messages } from '../../interfaces';
import { ChatService } from '../../services/chat.service';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NavService } from '../../services/nav.service';
import { SocketioService } from '../../services/socketio.service';
import { AnswersComponent } from '../../components/answers/answers.component';
import { RefDirective } from '../../directive/ref.directive';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(RefDirective) refDir: RefDirective

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

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private chatService: ChatService,
              private navService: NavService,
              private socketService: SocketioService,
              private router: Router,
              private resolver: ComponentFactoryResolver) {
                this.socketService.newMessage.subscribe(message => {
                  if (message.sender == this.id && message.recipient == this.session._id && !this.newMessages.includes(message)) {
                    this.newMessages.push(message)
                    for (let src of message.message) {
                      this.chatService.getAnswers(src).subscribe(answers => {
                        if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
                      },
                      error => {
                        console.log(error.error.message)
                      })
                    }
                    setTimeout(scroll, 200)
                    function scroll() {
                      document.getElementById('forScroll').scrollIntoView(false)
                    } 
                  }
                })
                this.socketService.online.subscribe(online => {
                  if (online == this.session._id && this.session._id != this.id) {
                    for (let message of this.letters.messagesRead) {
                      message.read = true
                    }
                    for (let message of this.newMessages) {
                      message.read = true
                    }
                  }
                })
               }

  ngOnInit(): void {
    this.reloading = true
    this.mesloading = true
    this.oSub = this.loginService.getUser().subscribe(user =>{
      this.session = user
      this.socketService.setupSocketConnection(user._id, this.id)
      this.reloading = false
    }) 

    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id
      this.user$ = this.chatService.getInterlocutor(this.id)
      this.messages$ = this.chatService.getMessages(this.id).subscribe(messages => {
        this.letters = messages
        for (let message of messages.messagesRead) {
          for (let src of message.message) {
            this.chatService.getAnswers(src).subscribe(answers => {
              if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
            },
            error => {
              console.log(error.error.message)
            })
          }
        }
        for (let message of messages.messagesNotRead) {
          for (let src of message.message) {    
            this.chatService.getAnswers(src).subscribe(answers => {
              if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
            },
            error => {
              console.log(error)
            })
          }
        }
        this.mesloading = false
      })
    }) 
  }

  ngAfterViewInit() {
    let TimerId = setInterval(scroll, 500)

    function scroll() {
      if (document.getElementById('forScroll')) {
        clearTimeout(TimerId)
        let separator = document.getElementById('separator') 
        if (separator) separator.scrollIntoView(true)
        else document.getElementById('forScroll').scrollIntoView(false)
      }
    }
  }

  newText() {
    if (this.textarea.trim()) {
      this.navService.sendTextMessage(this.textarea, 2)
      this.textarea = ''
    }
  }

  newMessageFromMe(message) {
    this.newMessages.push(message)
    setTimeout(scroll, 500)
    function scroll() {
      document.getElementById('forScroll').scrollIntoView(false)
    }    
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
    const modalFactory = this.resolver.resolveComponentFactory(AnswersComponent)

    this.refDir.containerRef.clear()
    const component = this.refDir.containerRef.createComponent(modalFactory)

    component.instance.src = ans
    component.instance.session = this.session

    component.instance.close.subscribe(close => {
      if (close) this.refDir.containerRef.clear()
    })
    component.instance.meta.subscribe(meta => {
      this.checkAnswer(meta)
      this.refDir.containerRef.clear()
    })
  }

  checkAnswer(meta) {
    if (meta[1]) {
      this.route.queryParams.subscribe((queryParam: any) => {
        let queryC = queryParam.color
        this.router.navigate([], {queryParams: {'folder': meta[0], 'color': queryC}})
        location.href=location.href
      })
    }
    else {
      this.navService.sendTextMessage(meta[0], meta[2])
    }
  }

  ngOnDestroy() {
    this.socketService.disconnectSocket(this.session._id)
    this.oSub.unsubscribe()
  }

}
