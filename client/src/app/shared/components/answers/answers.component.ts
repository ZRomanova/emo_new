import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { Picture } from '../../interfaces';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() src: string
  @Output() close = new EventEmitter<boolean>()
  @Output() meta = new EventEmitter<any[]>()

  $answers: Subscription
  answers: Picture[]
  reloading = false

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.reloading = true
    let path = this.src.split('/')
    let picture = path[1].split('.')
    this.$answers = this.chatService.getAnswers(picture[0], picture[1]).subscribe(answers => {
      this.answers = answers.answers
      this.sortAnswers()
    })
  }

  sortAnswers() {
    for (let picture of this.answers) {
      if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
      else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
      else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
      else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
    }
    this.reloading = false
  }

  closeModal(ans) {
    this.close.emit(ans)
  }

  checkAnswer(id: string, folder: boolean) {
    this.meta.emit([id, folder])
  }

}
