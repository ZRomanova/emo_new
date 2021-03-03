import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { User, GroupMessage, Event } from '../../interfaces';
import { LoginService } from '../../services/login.service';
import { GroupService } from '../../services/group.service';
import { SocketioService } from '../../services/socketio.service';
import { ChatService } from '../../services/chat.service';
import { EventsService } from '../../services/events.service';
import { NavService } from '../../services/nav.service';
import { RefDirective } from '../../directive/ref.directive';
import { AnswersComponent } from '../../components/answers/answers.component';

@Component({
  selector: 'app-group-layout',
  templateUrl: './group-layout.component.html',
  styleUrls: ['./group-layout.component.css']
})
export class GroupLayoutComponent implements OnInit, OnDestroy {

  @ViewChild(RefDirective) refDir: RefDirective

  reloading = false
  oSub: Subscription
  socMesSub: Subscription
  socOnlSub: Subscription
  session: User
  messages$: Subscription
  messages: GroupMessage[] = []
  group$: Subscription
  group: Event
  id: string
  textarea = ''
  zoom = false
  image = ''
  deleteMessage = false
  deleteID: GroupMessage
  mesloading = false
  withAnswers = []

  constructor(private loginService: LoginService,
    private route: ActivatedRoute,
    private chatService: ChatService,
    private navService: NavService,
    private socketService: SocketioService,
    private eventsService: EventsService,
    private groupService: GroupService,
    private router: Router,
    private resolver: ComponentFactoryResolver) { 
      this.socMesSub = this.socketService.newGroupMessage.subscribe(message => {
        if (message.group == this.id && !this.messages.includes(message)) {
          this.messages.push(message)
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
      this.socOnlSub = this.socketService.online.subscribe(online => {
        for (let message of this.messages) {
          if (!message.read.includes(online)) message.read.push(online)
        }       
      })
    }

  ngOnInit(): void {
    this.mesloading = true
    this.reloading = true

    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id
      this.messages$ = this.groupService.fetch(this.id).subscribe(messages => {
        this.messages = messages
        for (let message of messages) {
          for (let src of message.message) {
            this.chatService.getAnswers(src).subscribe(answers => {
              if (answers.answers.length !== 0 && !this.withAnswers.includes(src)) this.withAnswers.push(src)
            },
            error => {
              console.log(error.error.message)
            })
          }
        }
        this.mesloading = false
      })     
    }) 

    this.oSub = this.loginService.getUser().subscribe(user => {
      this.session = user
      this.socketService.setupSocketConnectionGroup(user._id, this.id)
      this.group$ = this.eventsService.getById(this.id).subscribe(event => {
        this.group = event
        this.reloading = false
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

  openZoom(src) {
    this.image = src
    this.zoom = true
  }

  closeZoom(result) {
    if (result) this.zoom = false
  }

  newText() {
    if (this.textarea.trim()) {
      this.navService.sendTextMessage(this.textarea, 2)
      this.textarea = ''
    }
  }

  newMessageFromMe(message) {
    this.messages.push(message)
    setTimeout(scroll, 500)
    function scroll() {
      document.getElementById('forScroll').scrollIntoView(false)
    }    
  }

  openDeleteMessage(data) {
    this.deleteID = data
    this.deleteMessage = true
  }

  closeDeleteMessage(result) {
    if (result) {
      this.groupService.delete(this.deleteID._id).subscribe(message => {
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
    component.instance.group = true

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
    this.socketService.disconnectSocketGroup(this.id)
    this.oSub.unsubscribe()
    this.messages$.unsubscribe()
    this.group$.unsubscribe()
    this.socMesSub.unsubscribe()
    this.socOnlSub.unsubscribe()
  }

}
