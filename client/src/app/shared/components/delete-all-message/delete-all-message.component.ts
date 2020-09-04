import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-all-message',
  templateUrl: './delete-all-message.component.html',
  styleUrls: ['./delete-all-message.component.css']
})
export class DeleteAllMessageComponent {

  @Output() result = new EventEmitter<boolean>()

  checked(ans) {
    this.result.emit(ans)
  }
}
