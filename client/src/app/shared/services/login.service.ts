import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User, MessageFromServer} from '../interfaces'
import {tap} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    private token = null
  
    constructor(private http: HttpClient) {
    }
  
    login(user: User): Observable<{token: string}> {
      return this.http.post<{token: string}>('/api/login', user)
        .pipe(
          tap(
            ({token}) => {
              localStorage.setItem('auth-token', token)
              this.setToken(token)
            }
          )
        )
    }

    getUser(): Observable<User> {
      return this.http.get<User>('/api/people')
    }
  
    setToken(token: string) {
      this.token = token
    }
  
    getToken(): string {
      return this.token
    }
  
    isAuthenticated(): boolean {
      return !!this.token
    }
  
    logout() {
      this.setToken(null)
      localStorage.clear()
    }

    exit(): Observable<MessageFromServer> {
      return this.http.delete<MessageFromServer>('/api/people')
    }
  }