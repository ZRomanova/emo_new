import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Institution, MessageFromServer} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {
    constructor(private http: HttpClient) {       
    }

    fetch(): Observable<Institution[]> {
      return this.http.get<Institution[]>('/api/manage/institutions')
    }

    getById(id: string): Observable<Institution> {
      return this.http.get<Institution>(`/api/manage/institutions/${id}`)
    }

    create(name: string): Observable<Institution> {
      const fd = {name: name}
      let json = JSON.stringify(fd)
      const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      return this.http.post<Institution>(`/api/manage/institutions`, json, {headers: myHeaders})
    }

    update(id: string, name: string): Observable<Institution> {
      const fd = {name: name}
      let json = JSON.stringify(fd)
      const myHeaders = new HttpHeaders().set('Content-Type', 'application/json')
      return this.http.patch<Institution>(`/api/manage/institutions/${id}`, json, {headers: myHeaders})
    }

    delete(id: string, newID: string): Observable<MessageFromServer> {
      return this.http.delete<MessageFromServer>(`/api/manage/institutions/${id}/${newID}`)
    }
}