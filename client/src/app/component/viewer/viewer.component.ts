import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  primaryPhoto = null;
  patternPhoto = null;

  constructor() { }

  ngOnInit() {
  }

  setPrimaryPhoto(event) {
    this.primaryPhoto = event;
  }

  setPatternPhoto(event) {
    this.patternPhoto = event;
  }

}
