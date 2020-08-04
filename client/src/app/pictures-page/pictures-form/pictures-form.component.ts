import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pictures-form',
  templateUrl: './pictures-form.component.html',
  styleUrls: ['./pictures-form.component.css']
})
export class PicturesFormComponent implements OnInit {

  form: FormGroup
  whatDo = ''
  many = ''

  constructor(private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.form = new FormGroup({

    })

    this.route.params.subscribe((params: Params) => {
      this.whatDo = params['do']
      this.many = params['many']
    })
  }

  onSubmit() {

  }

}
