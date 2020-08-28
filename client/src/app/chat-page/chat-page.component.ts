import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User, PictureAndFolder } from '../shared/interfaces';
import { ChatService } from '../shared/services/chat.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit, OnDestroy {

  @Input() session: User

  interlocutor: Subscription
  oSub: Subscription
  interlocutorSex: number
  id: string
  pictureAndFolder: PictureAndFolder
  queryF = ''
  queryC = ''
  reloading = false
  form: FormGroup
  files: File[]
  deletePicture = false
  image = ''

  constructor(private chatService: ChatService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloading = true
    this.route.firstChild.params.subscribe((params: Params) => {
      this.id = params.id

      this.interlocutor = this.chatService.getInterlocutor(this.id).subscribe(user => {
        this.interlocutorSex = user.sex

        this.route.queryParams.subscribe((queryParam: any) => {
          this.queryC = queryParam.color
          this.queryF = queryParam.folder
          this.oSub = this.chatService.getPictures(this.queryF).subscribe(pictureAndFolder =>{
            this.pictureAndFolder = pictureAndFolder
            this.sortPictures()
          })
        }) 
      })
    }) 
    this.form = new FormGroup({
      files: new FormControl(null)
    })
  }

  sortPictures() {
    for (let picture of this.pictureAndFolder.pictures) {
      if (picture.invisible === picture.answers.includes(this.session._id)) {
        if (picture._id == '5f130939962c2f062467f853') {
          picture.src = this.session.photo
          if (picture.text) picture.textInHTML = picture.text
          else if (picture.textForGirls) picture.textInHTML = picture.textForGirls
        }
        else {
          if (this.pictureAndFolder.folder.many == 0) {
            picture.src = picture.boysGreyPicture
            if (picture.text) picture.textInHTML = picture.text
          }
          else if (this.pictureAndFolder.folder.many == 1) {
            if (this.session.sex == 1) {
              if (picture.text) picture.textInHTML = picture.text
              else if (picture.textForGirls) picture.textInHTML = picture.textForGirls

              if (this.queryC == 'grey') {
                if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
              }
              else {
                if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
              }
            }
            else {
              if (picture.textForGirls) picture.textInHTML = picture.textForGirls
              else if (picture.text) picture.textInHTML = picture.text

              if (this.queryC == 'grey') {
                if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
              }
              else {
                if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
              }
            }
          }
          else {
            if (this.interlocutorSex == 1) {
              if (picture.text) picture.textInHTML = picture.text
              else if (picture.textForGirls) picture.textInHTML = picture.textForGirls

              if (this.queryC == 'grey') {
                if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
              }
              else {
                if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
              }
            }
            else {
              if (picture.textForGirls) picture.textInHTML = picture.textForGirls
              else if (picture.text) picture.textInHTML = picture.text
              
              if (this.queryC == 'grey') {
                if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
                else if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
              }
              else {
                if (picture.girlsColorPicture) picture.src = picture.girlsColorPicture
                else if (picture.boysColorPicture) picture.src = picture.boysColorPicture
                else if (picture.girlsGreyPicture) picture.src = picture.girlsGreyPicture
                else if (picture.boysGreyPicture) picture.src = picture.boysGreyPicture
              }
            }
          }
        }
      }
    }
    this.reloading = false
  }

  cross() {
    if (this.queryF == '5f12ff8cc06cd105437d84e3') {
      this.router.navigate(['/people/friends'])
    }
    else {
      this.router.navigate([], {queryParams: {'folder': this.pictureAndFolder.folder.parent, 'color': this.queryC}})
    }
  }

  newFolder(id) {
    this.router.navigate([], {queryParams: {'folder': id, 'color': this.queryC}})
  }

  newColor(color) {
    this.router.navigate([], {queryParams: {'folder': this.queryF, 'color': color}})
  }

  onFileUpload(event: any) {
    const files = event.target.files
    this.form.disable()
    this.chatService.newFiles(files).subscribe(
      message => this.form.enable(),
      error => {
        console.log(error.error.message)
        this.form.enable()
      }      
    )
  }

  fromDeletePicture(result: boolean) {
    if (result) {

    }
    else {
      this.deletePicture = false
    }
  }

  wantDeletePicture(src: string) {
    this.image = src
    this.deletePicture = true
  }

  ngOnDestroy() {
    this.interlocutor.unsubscribe()
    this.oSub.unsubscribe()
  }

}
