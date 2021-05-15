import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input() likes: User[]
  @Input() session: User
  @Output() result = new EventEmitter<boolean>()

  close() {
    this.result.emit(true)
  }

}
