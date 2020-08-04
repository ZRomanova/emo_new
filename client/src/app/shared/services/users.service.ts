import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {       
    }

    fetch(): Observable<User[]> {
      let params = new HttpParams()

      return this.http.get<User[]>(`/api/manage/users`, {params})
    }
}