import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/website/home/home.component';
import { LoginComponent } from './layouts/website/login/login.component';
import { UserPhotosComponent } from './layouts/website/user-photos/user-photos.component';
import { SelectListComponent } from './layouts/website/select-list/select-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin/dashboad',
    component:HomeComponent
  },
  {
    path:'home/:id',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user-photos',
    component:UserPhotosComponent
  },
  {
    path:'select-photos',
    component:SelectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
