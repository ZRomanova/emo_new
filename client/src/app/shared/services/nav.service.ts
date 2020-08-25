import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  newColor: EventEmitter<string> = new EventEmitter()
  fColor: EventEmitter<string> = new EventEmitter()
  sColor: EventEmitter<string> = new EventEmitter()
  newOnlane: EventEmitter<string> = new EventEmitter()

  public sendColor(color) {
    this.newColor.emit(color);
  }

  public sendToPeople(color1, color2, online) {
    this.fColor.emit(color1);
    this.sColor.emit(color2);
    this.newOnlane.emit(online);
  }
}
