import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PictureAndFolder, Picture, MessageFromServer} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
    constructor(private http: HttpClient) {       
    }
    
  getById(_id: string): Observable<Picture> {
    return this.http.get<Picture>(`/api/manage/pictures/one/${_id}`)
  }

  fetch(_id: string): Observable<PictureAndFolder> {
    return this.http.get<PictureAndFolder>(`/api/manage/pictures/${_id}`)
  }

  create(
    parent: string,
    invisible: boolean,
    folder: boolean,
    many?: boolean,  
    text?: string, 
    boysGreyPicture?: File,
    girlsGreyPicture?: File,
    boysColorPicture?: File,
    girlsColorPicture?: File,
    ): Observable<Picture> {
    const fd = new FormData()

    if (boysGreyPicture) {
      fd.append('boysGreyPicture', boysGreyPicture, boysGreyPicture.name)
    }
    if (girlsGreyPicture) {
      fd.append('girlsGreyPicture', girlsGreyPicture, girlsGreyPicture.name)
    }
    if (boysColorPicture) {
      fd.append('boysColorPicture', boysColorPicture, boysColorPicture.name)
    }
    if (girlsColorPicture) {
      fd.append('girlsColorPicture', girlsColorPicture, girlsColorPicture.name)
    }
    if (text) fd.append('text', text)
    if (many) fd.append('many', many.toString())
    fd.append('invisible', invisible.toString())
    fd.append('folder', folder.toString())

    return this.http.post<Picture>(`/api/manage/pictures/${parent}`, fd)
  }

  update(id: string,
    invisible: boolean, 
    text: string, 
    boysGreyPicture?: File,
    girlsGreyPicture?: File,
    boysColorPicture?: File,
    girlsColorPicture?: File,
    ): Observable<Picture> {
    const fd = new FormData()

    if (boysGreyPicture) {
      fd.append('boysGreyPicture', boysGreyPicture, boysGreyPicture.name)
    }
    if (girlsGreyPicture) {
      fd.append('girlsGreyPicture', girlsGreyPicture, girlsGreyPicture.name)
    }
    if (boysColorPicture) {
      fd.append('boysColorPicture', boysColorPicture, boysColorPicture.name)
    }
    if (girlsColorPicture) {
      fd.append('girlsColorPicture', girlsColorPicture, girlsColorPicture.name)
    }
    if (text) fd.append('text', text)
    fd.append('invisible', invisible.toString())

    return this.http.patch<Picture>(`/api/manage/pictures/${id}`, fd)
  }

  delete(id: string): Observable<MessageFromServer> {
   return this.http.delete<MessageFromServer>(`/api/manage/pictures/${id}`)
  }
}