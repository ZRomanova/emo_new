import * as io from 'socket.io-client';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  newMessage: EventEmitter<Message> = new EventEmitter()

  socket = io(environment.SOCKET_ENDPOINT)
  
  setupSocketConnection(id) {       //вхождение в чат (ngOnInit)
    this.socket.emit('in-chat', id)

    this.socket.on('new message', (data) => {
      this.newMessage.emit(data.message)
    })
  }

  sendMessage(id: string, message: Message) {       //отправка сообщения
    this.socket.emit('new message', {id, message})
  }

  disconnectSocket(id: string) {      //выхождение из чата (ngOnDestroy)
    this.socket.emit('leave room', id)
  }
}
