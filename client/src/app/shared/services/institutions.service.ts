import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Institution} from '../interfaces'

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
      const fd = new FormData()
      fd.append('name', name)
      console.log(fd.getAll('name'))
      const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      return this.http.post<Institution>(`/api/manage/institutions`, fd, {headers: myHeaders})
    }

    update(id: string, name: string): Observable<Institution> {
      const fd = new FormData()  
      fd.append('name', name)
      console.log(fd.getAll('name'))
      const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      return this.http.patch<Institution>(`/api/manage/institutions/${id}`, fd, {headers: myHeaders})
    }
}