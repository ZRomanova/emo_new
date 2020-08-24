import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  newColor: EventEmitter<string> = new EventEmitter()

  public sendColor(color) {
    this.newColor.emit(color);
  }
}
