import { Component, OnInit, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../service/user.service';
=======
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6

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


<<<<<<< HEAD
  constructor(private httpClient: HttpClient, private userService: UserService) { }
=======
  constructor() { }
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6

  ngOnInit() {
  }

  uploadPrimary(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
<<<<<<< HEAD
      reader.onload = async (fileReader: any) => { // called once readAsDataURL is completed
        this.primaryPhoto = fileReader.target.result;
        this.newPrimaryPhoto.emit(this.primaryPhoto);
        this.uploadCall(this.patternPhoto);
=======
      reader.onload = (fileReader: any) => { // called once readAsDataURL is completed
        this.primaryPhoto = fileReader.target.result;
        this.newPrimaryPhoto.emit(this.primaryPhoto);
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
      };
    }
  }

  uploadPattern(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
<<<<<<< HEAD
      reader.onload = (fileReader: any) => { // called once readAsDataURL is completed
        this.patternPhoto = fileReader.target.result;
        this.newPatternPhoto.emit(this.patternPhoto);
        this.uploadCall(this.patternPhoto);
=======

      reader.onload = (fileReader: any) => { // called once readAsDataURL is completed
        this.patternPhoto = fileReader.target.result;
        this.newPatternPhoto.emit(this.patternPhoto);
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
      };
    }
  }

<<<<<<< HEAD
  uploadCall(image: string) {
    this.httpClient.post('/api/upload', this.primaryPhoto, {responseType: 'json', params: {'sessionId': this.userService.sessionId}}).subscribe();
  }

=======
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
  removePhotos() {
    this.primaryPhoto = null;
    this.patternPhoto = null;
    this.newPrimaryPhoto.emit(this.primaryPhoto);
    this.newPatternPhoto.emit(this.patternPhoto);
  }

<<<<<<< HEAD
  async processPhotos() {
    // do the stuff
    console.log('doing the stuff...' );
    this.httpClient.get('/api/evaluate')
=======
  processPhotos() {
    // do the stuff
    console.log('doing the stuff...' );
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
  }

}
