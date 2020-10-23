import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  newColor: EventEmitter<string> = new EventEmitter()
  fColor: EventEmitter<string> = new EventEmitter()
  sColor: EventEmitter<string> = new EventEmitter()
  newOnlane: EventEmitter<string> = new EventEmitter()
  newDefColor: EventEmitter<string> = new EventEmitter()
  textMessage: EventEmitter<any[]> = new EventEmitter()

  public sendColor(color) {
    this.newColor.emit(color);
  }

  public sendToPeople(color1, color2, online, color) {
    this.fColor.emit(color1);
    this.sColor.emit(color2);
    this.newOnlane.emit(online);
    this.newDefColor.emit(color);
  }

  public sendTextMessage(message: string, type: number) {
    this.textMessage.emit([message, type])
  }

}
