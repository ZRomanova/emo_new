import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
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
}