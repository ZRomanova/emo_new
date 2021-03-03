import * as io from 'socket.io-client';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message, GroupMessage } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  newMessage: EventEmitter<Message> = new EventEmitter()
  newGroupMessage: EventEmitter<GroupMessage> = new EventEmitter()
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

  setupSocketConnectionGroup(id, group) {       //вхождение в чат (ngOnInit) group
    this.socket.emit('in-group', {group, id})

    this.socket.on('new-group-message', (message) => {
      this.newGroupMessage.emit(message)
    })

    this.socket.on('online', (id) => {
      this.online.emit(id)
    })
  }

  sendMessageGroup(group: string, message: GroupMessage) {       //отправка сообщения group
    this.socket.emit('new-group-message', {group, message})
  }

  disconnectSocketGroup(group: string) {      //выхождение из чата (ngOnDestroy) group
    this.socket.emit('leave group room', group)
  }
}
