import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-pictures-start',
  templateUrl: './pictures-start.component.html',
  styleUrls: ['./pictures-start.component.css']
})
export class PicturesStartComponent implements OnInit {

  session$: Observable<User>

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.session$ = this.loginService.getUser()
  }

}
