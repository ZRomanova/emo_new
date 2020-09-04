import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-audio',
  templateUrl: './record-audio.component.html',
  styleUrls: ['./record-audio.component.css']
})
export class RecordAudioComponent implements OnInit {

  recording = true

  constructor() { }

  ngOnInit(): void {
  }
  /*
  record() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.mediaDevices.getUserMedia (
         // Установим ограничение на получение только аудио потока 
        {audio: true}
        )
         // Функция успешного получения потока
        .then(function(stream) {
          const mediaRecorder = new MediaRecorder(stream);
           
         })
         // Функция ошибок
        .catch(function(err) {
          console.log('The following getUserMedia error occured: ' + err);
        }
      );
   } else {
      console.log('getUserMedia not supported on your browser!');
   }
  }
  */

}
