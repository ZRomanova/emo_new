import { Component, OnInit } from '@angular/core';
import { Institution, User } from '../shared/interfaces';
import { Observable } from 'rxjs';
import {InstitutionsService} from '../shared/services/institutions.service'
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-institutions-page',
  templateUrl: './institutions-page.component.html',
  styleUrls: ['./institutions-page.component.css']
})
export class InstitutionsPageComponent implements OnInit {

  institutions$: Observable<Institution[]>
  institution: Institution
  session$: Observable<User>

  constructor(private institutionsService: InstitutionsService,
              private loginService: LoginService) {}

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()
    this.institutions$ = this.institutionsService.fetch()
  }

}
