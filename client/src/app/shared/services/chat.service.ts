import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, PictureAndFolder, MessageFromServer } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private router: Router,
              private http: HttpClient) { }

  goToChat(id: string, color: string) {
    this.router.navigate([`/chat/${id}`], {queryParams: {color: color, folder: '5f12ff8cc06cd105437d84e3'}})
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
    return this.http.post<MessageFromServer>(`/api/chat/new`, fd)
  }
}
