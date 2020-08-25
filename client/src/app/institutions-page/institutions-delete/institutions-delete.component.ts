import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { User, Institution } from 'src/app/shared/interfaces';
import { InstitutionsService } from 'src/app/shared/services/institutions.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-institutions-delete',
  templateUrl: './institutions-delete.component.html',
  styleUrls: ['./institutions-delete.component.css']
})
export class InstitutionsDeleteComponent implements OnInit {

  institutions$: Observable<Institution[]>
  session$: Observable<User>
  form: FormGroup
  thisID: string
  name: string

  constructor(private route: ActivatedRoute,
              private institutionsService: InstitutionsService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()
    this.institutions$ = this.institutionsService.fetch()

    this.form = new FormGroup({
      newID: new FormControl(null, Validators.required)
    })

    this.route.params
    .pipe(
      switchMap(
        (params: Params) => {
          this.thisID = params['id']
          return this.institutionsService.getById(this.thisID)
        }
      )
    )
    .subscribe(
      (institution: Institution) => {
        if (institution) {
          this.name = institution.name
        }
      }
    )

  }

  onSubmit() {
    this.institutionsService.delete(this.thisID, this.form.value.newID)
      .subscribe(
        response => {},
        error => {console.log(error.error.message)},
        () => this.router.navigate([`/manage/institutions`])
      )
  }


}
