import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InstitutionsService } from 'src/app/shared/services/institutions.service';
import { of, Observable } from 'rxjs';
import { Institution, User } from 'src/app/shared/interfaces';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-institutions-form',
  templateUrl: './institutions-form.component.html',
  styleUrls: ['./institutions-form.component.css']
})
export class InstitutionsFormComponent implements OnInit {

  form: FormGroup
  whatDo = ''
  iName = ''
  session$: Observable<User>

  constructor(private route: ActivatedRoute,
              private institutionsService: InstitutionsService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
    .pipe(
      switchMap(
        (params: Params) => {
          this.whatDo = params['do']
          if (this.whatDo !== 'new') {
            return this.institutionsService.getById(this.whatDo)
          }
          return of(null)
        }
      )
    )
    .subscribe(
      (institution: Institution) => {
        if (institution) {
          this.iName = institution.name
          this.form.patchValue({
            name: institution.name
          })
        }
      }
    )

    this.form.enable()
  }

  onSubmit() { 
    if (this.iName != this.form.value.name) {
      let obs$
      this.form.disable()
      if (this.whatDo == 'new') {
        obs$ = this.institutionsService.create(this.form.value.name)
      }
      else {
        obs$ = this.institutionsService.update(this.whatDo, this.form.value.name)
      }
      obs$.subscribe(
        institution => {    
          this.form.enable()
          this.router.navigate([`/manage/institution`])
        },
        error => {
          console.log(error.error.message)
          this.form.enable()
        }
      )
    }
  }

}
