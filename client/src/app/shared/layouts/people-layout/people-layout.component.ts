import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MessageFromServer } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people-layout',
  templateUrl: './people-layout.component.html',
  styleUrls: ['./people-layout.component.css']
})
export class PeopleLayoutComponent implements OnInit {

  constructor(
    private auth: LoginService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    let oSub = this.auth.exit().subscribe()
    oSub.unsubscribe()
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
