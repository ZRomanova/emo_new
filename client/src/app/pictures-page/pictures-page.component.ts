import { Component, OnInit } from '@angular/core';
import {PicturesService} from '../shared/services/pictures.service'
import {PictureAndFolder, User} from '../shared/interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-pictures-page',
  templateUrl: './pictures-page.component.html',
  styleUrls: ['./pictures-page.component.css']
})
export class PicturesPageComponent implements OnInit {

  pictureAndFolder: PictureAndFolder
  picturesAndFolder$: Observable<PictureAndFolder>
  session$: Observable<User>
  queryA = ''

  constructor(
    private picturesService: PicturesService,
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.session$ = this.loginService.getUser()
    
    this.route.params.subscribe((params: Params) => {
      this.picturesAndFolder$ = this.picturesService.fetch(params._id)
    })   
    this.route.queryParams.subscribe((queryParam: any) => {
      this.queryA = queryParam.answersFolder
    })
  }

}
