import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PicturesService } from 'src/app/shared/services/pictures.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Picture } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-pictures-form',
  templateUrl: './pictures-form.component.html',
  styleUrls: ['./pictures-form.component.css']
})
export class PicturesFormComponent implements OnInit {

  form: FormGroup
  whatDo = ''
  many = ''
  folder = ''
  system = false
  image1: File
  image2: File
  image3: File
  image4: File
  image1Preview = ''
  image2Preview = ''
  image3Preview = ''
  image4Preview = ''
  picture: Picture

  constructor(private route: ActivatedRoute,
              private picturesService: PicturesService,
              private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      many: new FormControl('true', Validators.required),
      boysGreyPicture: new FormControl(null),
      girlsGreyPicture: new FormControl(null),
      boysColorPicture: new FormControl(null),
      girlsColorPicture: new FormControl(null),
      text: new FormControl(null),
      invisible: new FormControl('false', Validators.required) 
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            this.whatDo = params['do']
            this.many = params['many']
            this.folder = params['folder']
            if (params['_id'] !== 'null') {
              return this.picturesService.getById(params['_id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (picture: Picture) => {
          if (picture) {
            this.picture = picture
            this.form.patchValue({
              boysGreyPicture: picture.boysGreyPicture,
              girlsGreyPicture: picture.girlsGreyPicture,
              boysColorPicture: picture.boysColorPicture,
              girlsColorPicture: picture.girlsColorPicture,
              text: picture.text,
              invisible: picture.invisible === true ? 'true' : 'false'
            })
            this.image1Preview = picture.boysGreyPicture
            this.image2Preview = picture.girlsGreyPicture
            this.image3Preview = picture.boysColorPicture
            this.image4Preview = picture.girlsColorPicture
            if (picture.system === true) this.system = true
            
          }

          this.form.enable()
        },
        error => {}
      )
  }

  deletePicture() {
    let type = ''
    if (this.picture.folder === true) type = 'папку'
    else type = 'картинку'
    const decision = window.confirm(`Вы уверены, что хотите удалить ${type}?`)

    if (decision) {
      this.picturesService.delete(this.picture._id)
        .subscribe(
          response => {},
          error => {},
          () => this.router.navigate([`/manage/pictures/${this.folder}`])
        )
    }
  }

  onFile1Upload(event: any) {
    const file = event.target.files[0]
    this.image1 = file
    const reader = new FileReader()
    reader.onload = () => {
      this.image1Preview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  onFile2Upload(event: any) {
    const file = event.target.files[0]
    this.image2 = file
    const reader = new FileReader()
    reader.onload = () => {
      this.image2Preview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  onFile3Upload(event: any) {
    const file = event.target.files[0]
    this.image3 = file
    const reader = new FileReader()
    reader.onload = () => {
      this.image3Preview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }

  onFile4Upload(event: any) {
    const file = event.target.files[0]
    this.image4 = file
    const reader = new FileReader()
    reader.onload = () => {
      this.image4Preview = reader.result.toString()
    }
    reader.readAsDataURL(file)
  }
  
  onSubmit() {
    let obs$
    this.form.disable()

    if (this.whatDo === 'edit') {
      obs$ = this.picturesService.update(
        this.picture._id, 
        this.form.value.invisible,
        this.form.value.text,
        this.image1,
        this.image2,
        this.image3,
        this.image4
        )
    } else {
      obs$ = this.picturesService.create(
        this.folder, 
        this.form.value.invisible,
        this.whatDo === 'newfolder' ? true : false, 
        this.form.value.many,
        this.form.value.text,
        this.image1,
        this.image2,
        this.image3,
        this.image4
        )
    }

    obs$.subscribe(
      picture => {
        this.picture = picture
        
        this.form.enable()
      },
      error => {
        
        this.form.enable()
      }
    )
  }

}
