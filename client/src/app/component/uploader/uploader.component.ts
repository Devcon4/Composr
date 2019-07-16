import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  @Output() newPrimaryPhoto = new EventEmitter<any>();
  @Output() newPatternPhoto = new EventEmitter<any>();

  primaryPhoto;
  patternPhoto;


  constructor(private httpClient: HttpClient, private userService: UserService) { }

  ngOnInit() {
  }

  uploadPrimary(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = async (fileReader: any) => { // called once readAsDataURL is completed
        this.primaryPhoto = fileReader.target.result;
        this.newPrimaryPhoto.emit(this.primaryPhoto);
        this.uploadCall(this.patternPhoto);
      };
    }
  }

  uploadPattern(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (fileReader: any) => { // called once readAsDataURL is completed
        this.patternPhoto = fileReader.target.result;
        this.newPatternPhoto.emit(this.patternPhoto);
        this.uploadCall(this.patternPhoto);
      };
    }
  }

  uploadCall(image: string) {
    this.httpClient.post('/composr/api/upload', this.primaryPhoto, {responseType: 'json', params: {'sessionId': this.userService.sessionId}}).subscribe();
  }

  removePhotos() {
    this.primaryPhoto = null;
    this.patternPhoto = null;
    this.newPrimaryPhoto.emit(this.primaryPhoto);
    this.newPatternPhoto.emit(this.patternPhoto);
  }

  async processPhotos() {
    // do the stuff
    console.log('doing the stuff...' );
    this.httpClient.get('/composr/api/evaluate').subscribe();
  }

}
