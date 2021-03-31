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
  session$: Observable<User>
  image: File
  imagePreview = ''

  constructor(private route: ActivatedRoute,
              private institutionsService: InstitutionsService,
              private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()

    this.form = new FormGroup({
      photo: new FormControl(null),
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
          this.form.patchValue({
            name: institution.name
          })
          if (institution.img) this.imagePreview = institution.img
        }
      }
    )

    this.form.enable()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  onSubmit() { 
    let obs$
    this.form.disable()
    if (this.whatDo == 'new') {
      obs$ = this.institutionsService.create(this.form.value.name, this.image)
    }
    else {
      obs$ = this.institutionsService.update(this.whatDo, this.form.value.name, this.image)
    }
    obs$.subscribe(
      institution => {    
        this.form.enable()
        this.router.navigate([`/manage/institutions`])
      },
      error => {
        console.log(error.error.message)
        this.form.enable()
      }
    )  
  }

}
