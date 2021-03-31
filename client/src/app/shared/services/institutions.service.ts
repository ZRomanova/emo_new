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

    create(name: string, img?: File): Observable<Institution> {
      const fd = new FormData()
      fd.append('name', name)
      if (img) fd.append('image', img, img.name)
      return this.http.post<Institution>(`/api/manage/institutions`, fd)
    }

    update(id: string, name: string, img?: File): Observable<Institution> {
      const fd = new FormData()
      fd.append('name', name)
      if (img) fd.append('image', img, img.name)
      return this.http.patch<Institution>(`/api/manage/institutions/${id}`, fd)
    }

    delete(id: string, newID: string): Observable<MessageFromServer> {
      return this.http.delete<MessageFromServer>(`/api/manage/institutions/${id}/${newID}`)
    }
}