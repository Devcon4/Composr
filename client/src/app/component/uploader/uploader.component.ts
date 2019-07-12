import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
  }

  uploadPrimary(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (fileReader: any) => { // called once readAsDataURL is completed
        this.primaryPhoto = fileReader.target.result;
        this.newPrimaryPhoto.emit(this.primaryPhoto);
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
      };
    }
  }

  removePhotos() {
    this.primaryPhoto = null;
    this.patternPhoto = null;
    this.newPrimaryPhoto.emit(this.primaryPhoto);
    this.newPatternPhoto.emit(this.patternPhoto);
  }

  processPhotos() {
    // do the stuff
    console.log('doing the stuff...' );
  }

}
