import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router'
import {Observable, of, Subscription} from 'rxjs'
import {Injectable} from '@angular/core'
import {LoginService} from '../services/login.service'

@Injectable({
    providedIn: 'root'
  })
export class AdminGuard implements CanActivate, CanActivateChild {

    role: number

    constructor(private auth: LoginService,
                private router: Router){}

     async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        
        const thisuser = await this.auth.getUser().toPromise()
        this.role = thisuser.levelStatus
        if (this.role == 1) {
            return (true)
        }
        else {
            this.router.navigate(['/people/friends'])
            return (false)
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state)
    }
}