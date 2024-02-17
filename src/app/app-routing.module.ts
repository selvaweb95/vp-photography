import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/website/home/home.component';
import { LoginComponent } from './layouts/website/login/login.component';
import { UserPhotosComponent } from './layouts/website/user-photos/user-photos.component';
import { SelectListComponent } from './layouts/website/select-list/select-list.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { EventsComponent } from './layouts/admin/events/events.component';
import { AdminPanelComponent } from './layouts/admin/admin-panel.component';
import { MySchedulesComponent } from './layouts/admin/my-schedules/my-schedules.component';

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
  },
  {
    path:'admin-panel',
    component:AdminPanelComponent,
    children : [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'events', component: EventsComponent },  
        { path: 'my-schedules', component: MySchedulesComponent },  
        { path: '', redirectTo:'events', pathMatch:"full" }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
