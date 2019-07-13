import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ViewerComponent } from './component/viewer/viewer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { UploaderComponent } from './component/uploader/uploader.component';
<<<<<<< HEAD
import { UserService } from './service/user.service';
=======
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewerComponent,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
