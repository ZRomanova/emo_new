import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-picture',
  templateUrl: './delete-picture.component.html',
  styleUrls: ['./delete-picture.component.css']
})
export class DeletePictureComponent{

  @Input() image: string
  @Output() result = new EventEmitter<boolean>()

  checkedDelete (ans: boolean){
    this.result.emit(ans)
  }
}
