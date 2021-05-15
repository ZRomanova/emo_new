import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture-zoom',
  templateUrl: './picture-zoom.component.html',
  styleUrls: ['./picture-zoom.component.css']
})
export class PictureZoomComponent {

  @Input() image: string
  @Output() result = new EventEmitter<boolean>()

  close() {
    this.result.emit(true)
  }
}
