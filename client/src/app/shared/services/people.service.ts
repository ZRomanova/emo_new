import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  update(
    online?: boolean,
    text?: boolean,
    read?: boolean,
    firstColor?: number,
    secondColor?: number,
    surnameView?: boolean,
    vote?: boolean,
    sentence?: boolean,
    answers?: boolean,
    change?: boolean,
    defaultColor?: string,
    birthdays?: boolean
  ): Observable<User> {
    let obj = {
      online,
      text,
      read,
      firstColor,
      secondColor,
      surnameView,
      vote,
      sentence,
      answers,
      change,
      defaultColor,
      birthdays
    }
    let json = JSON.stringify(obj)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.patch<User>(`/api/people`, json, {headers: myHeaders})
  }

  newRole(levelStatus: string) {
    let obj = {
      levelStatus
    }
    let json = JSON.stringify(obj)
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.patch<User>(`/api/people`, json, {headers: myHeaders})
  }

  fetchAll(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/people/search/${id}`)
  }

  fetchFriends(): Observable<User[]> {
    return this.http.get<User[]>(`/api/people/friends`)
  }
}
