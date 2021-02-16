import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BotButton } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<BotButton[]> {
    return this.http.get<BotButton[]>(`/api/bot`)
  }

  getById(id: string): Observable<BotButton> {
    return this.http.get<BotButton>(`/api/bot/${id}`)
  }

  create(img: File, text: string): Observable<BotButton> {
    const fd = new FormData()

    fd.append('text', text)
    fd.append('image', img, img.name)

    return this.http.post<BotButton>(`/api/bot`, fd)
  }

  update(id: string, img?: File, text?: string): Observable<BotButton> {
    const fd = new FormData()

    if (text) fd.append('text', text)
    if (img) fd.append('image', img, img.name)

    return this.http.patch<BotButton>(`/api/bot/${id}`, fd)
  }
}
