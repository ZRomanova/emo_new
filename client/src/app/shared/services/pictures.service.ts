import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PictureAndFolder} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
    constructor(private http: HttpClient) {       
    }
    /*
    fetch(_id: string): Observable<Picture[]> {
      return this.http.get<Picture[]>(`/api/manage/pictures/${_id}`)
    }
    */
   fetch(_id: string): Observable<PictureAndFolder> {
    return this.http.get<PictureAndFolder>(`/api/manage/pictures/${_id}`)
  }
}