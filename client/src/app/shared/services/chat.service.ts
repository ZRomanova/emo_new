import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, PictureAndFolder, MessageFromServer, Message, Messages, Answers, Picture, GroupMessage } from '../interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private router: Router,
              private http: HttpClient) { }

  goToChat(id: string, color: string, folder?: string) {
    var fold = '5f12ff8cc06cd105437d84e3'
    if (folder) fold = folder
    this.router.navigate([`/chat/${id}`], {queryParams: {color: color, folder: fold}})
  }

  getInterlocutor(id: string): Observable<User> {
    return this.http.get<User>(`/api/chat/interlocutor/${id}`)
  }
  
  getPictures(id: string): Observable<PictureAndFolder> {
    return this.http.get<PictureAndFolder>(`/api/chat/${id}`)
  }

  newFiles(files: File[]): Observable<MessageFromServer> {
    const fd = new FormData()
    for (let i = 0; i < files.length; i++) {
      fd.append(`files`, files[i], files[i].name)
    }
    return this.http.post<MessageFromServer>(`/api/chat/picture/new`, fd)
  }

  newFilesInGroup(files: File[]): Observable<MessageFromServer> {
    const fd = new FormData()
    for (let i = 0; i < files.length; i++) {
      fd.append(`files`, files[i], files[i].name)
    }
    return this.http.post<MessageFromServer>(`/api/group/picture/new`, fd)
  }

  newVote(blob: Blob): Observable<Picture> {
    let file = new File([blob], 'vote.webm', {type: 'audio/webm'}) 
    const fd = new FormData()
    fd.append('file', file, file.name)
    return this.http.post<Picture>(`/api/chat/vote/new`, fd)
  }

  newVoteInGroup(blob: Blob): Observable<Picture> {
    let file = new File([blob], 'vote.webm', {type: 'audio/webm'}) 
    const fd = new FormData()
    fd.append('file', file, file.name)
    return this.http.post<Picture>(`/api/group/vote/new`, fd)
  }

  deletePicture(id: string): Observable<MessageFromServer> {
    return this.http.delete<MessageFromServer>(`/api/manage/pictures/${id}`)
  }

  sendMessage(friend: string, message: string[], type: number[]): Observable<Message> {
    const fd = {message, type}
    let json = JSON.stringify(fd)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<Message>(`/api/chat/${friend}`, json, {headers: myHeaders})
  }

  sendGroupMessage(group: string, message: string[], type: number[]): Observable<GroupMessage> {
    const fd = {message, type}
    let json = JSON.stringify(fd)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<GroupMessage>(`/api/group/${group}`, json, {headers: myHeaders})
  }
  
  getMessages(friend: string): Observable<Messages> {
    return this.http.get<Messages>(`/api/chat/message/${friend}`)
  }

  deleteOneMessage (id: string): Observable<MessageFromServer> {
    return this.http.delete<MessageFromServer>(`/api/chat/${id}`) 
  }

  deleteAllMessages (friend: string): Observable<MessageFromServer> {
    return this.http.delete<MessageFromServer>(`/api/chat/all/${friend}`)
  }

  getAnswers (src: string): Observable<Answers> {
    const fd = {src}
    let json = JSON.stringify(fd)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<Answers>(`/api/chat/answers/new`, json, {headers: myHeaders})
  }
}
