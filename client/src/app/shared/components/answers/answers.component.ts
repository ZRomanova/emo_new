import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NavService } from '../../services/nav.service';
import { Subscription } from 'rxjs';
import { Picture, User } from '../../interfaces';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnDestroy {

  @Input() src: string
  @Input() session: User
  @Output() close = new EventEmitter<boolean>()
  @Output() meta = new EventEmitter<any[]>()

  $answers: Subscription
  answers: Picture[]
  reloading = false
  interlocutor: Subscription
  interlocutorSex: number
  id: string
  queryC = ''
  many: number

  constructor(private chatService: ChatService,
              private route: ActivatedRoute,
              private navService: NavService) {
                this.navService.manyFolder.subscribe(many => {
                  this.many = many
                })
               }

  ngOnInit(): void {
    this.reloading = true
    let path = this.src.split('/')
    let picture = path[1].split('.')

    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id
      this.interlocutor = this.chatService.getInterlocutor(this.id).subscribe(user => {
        this.interlocutorSex = user.sex
        this.route.queryParams.subscribe((queryParam: any) => {
          this.queryC = queryParam.color
          this.$answers = this.chatService.getAnswers(picture[0], picture[1], path[0]).subscribe(answers => {
            this.answers = answers.answers
            this.sortAnswers()
          })
        })
        
      })
    })
  }

  sortAnswers() {
    console.log(this.many)
    for (let picture of this.answers) {     
      if (picture._id == '5f130939962c2f062467f853') {
        picture.src = this.session.photo
        if (picture.text) picture.textInHTML = picture.text
        else if (picture.textForGirls) picture.textInHTML = picture.textForGirls
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
    this.reloading = false
  }

  closeModal(ans) {
    this.close.emit(ans)
  }

  checkAnswer(id: string, folder: boolean, type?: number) {
    if (type) this.meta.emit([id, folder, type])
    else this.meta.emit([id, folder])
  }

  ngOnDestroy() {
    this.$answers.unsubscribe()
    this.interlocutor.unsubscribe()
  }

}
