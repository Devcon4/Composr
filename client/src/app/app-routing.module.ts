import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'composr/home',
    pathMatch: 'full'
  },
  {
    path: 'composr',
    redirectTo: 'composr/home',
    pathMatch: 'full'
  },
  {
    path: 'composr/home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
