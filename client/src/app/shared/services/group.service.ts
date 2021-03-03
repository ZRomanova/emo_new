import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupMessage, MessageFromServer } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  create(group: string,
    type: number[],
    message: string[],
    ): Observable<GroupMessage> {
    const fd = {type, message}
    let json = JSON.stringify(fd)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post<GroupMessage>(`/api/group/${group}`, json, {headers: myHeaders})
  }

  delete(id: string): Observable<MessageFromServer> {
    return this.http.delete<MessageFromServer>(`/api/group/${id}`)
  }

  fetch(group: string): Observable<GroupMessage[]> {
    return this.http.get<GroupMessage[]>(`/api/group/${group}`)
  }

  fetchById(id: string): Observable<GroupMessage[]> {
    return this.http.get<GroupMessage[]>(`/api/group/one/${id}`)
  }
}
