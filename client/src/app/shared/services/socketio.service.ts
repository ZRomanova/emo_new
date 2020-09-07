import * as io from 'socket.io-client';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  newMessage: EventEmitter<Message> = new EventEmitter()
  online: EventEmitter<string> = new EventEmitter()

  socket = io(environment.SOCKET_ENDPOINT)
  
  setupSocketConnection(id, interlocutor) {       //вхождение в чат (ngOnInit)
    this.socket.emit('in-chat', id)

    this.socket.emit('online', interlocutor)

    this.socket.on('new message', (data) => {
      this.newMessage.emit(data.message)
    })

    this.socket.on('online', (id) => {
      this.online.emit(id)
    })
  }

  sendMessage(id: string, message: Message) {       //отправка сообщения
    this.socket.emit('new message', {id, message})
  }

  disconnectSocket(id: string) {      //выхождение из чата (ngOnDestroy)
    this.socket.emit('leave room', id)
  }
}
