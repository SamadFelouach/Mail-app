import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeManageComponent } from './home-manage/home-manage.component';
const routes: Routes = [
  { path: '',  component: HomeManageComponent },
  { path: 'home',  component: HomeManageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
