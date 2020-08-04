import { Component, OnInit } from '@angular/core';
import { Institution } from '../shared/interfaces';
import { Observable } from 'rxjs';
import {InstitutionsService} from '../shared/services/institutions.service'

@Component({
  selector: 'app-institutions-page',
  templateUrl: './institutions-page.component.html',
  styleUrls: ['./institutions-page.component.css']
})
export class InstitutionsPageComponent implements OnInit {

  institutions$: Observable<Institution[]>

  constructor(private institutionsService: InstitutionsService) {}

  ngOnInit(): void {
    this.institutions$ = this.institutionsService.fetch()
  }

}
