import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../shared/services/pictures.service'
import {PictureAndFolder} from '../shared/interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pictures-page',
  templateUrl: './pictures-page.component.html',
  styleUrls: ['./pictures-page.component.css']
})
export class PicturesPageComponent implements OnInit {

  pictureAndFolder: PictureAndFolder
  picturesAndFolder$: Observable<PictureAndFolder>

  constructor(
    private picturesService: PicturesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.picturesAndFolder$ = this.picturesService.fetch(params._id)
    })   
  }

}
