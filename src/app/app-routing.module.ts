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
import { CreateEventComponent } from './layouts/admin/create-event/create-event.component';
import { authGuardGuard } from './services/guard/auth-guard.guard';
import { adminGuard } from './services/guard/admin.guard';
import { SignatureComponent } from './layouts/website/signature/signature.component';

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
    canActivate:[authGuardGuard],
    component:UserPhotosComponent
  },
  {
    path:'signature-photos',
    canActivate:[authGuardGuard],
    component:SignatureComponent
  },
  {
    path:'select-photos',
    canActivate:[authGuardGuard],
    component:SelectListComponent
  },
  {
    path:'admin-panel',
    component:AdminPanelComponent,
    canActivateChild:[adminGuard],
    children : [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'events', component: EventsComponent, },  
        { path: 'events/:id', component: CreateEventComponent },  
        { path: 'my-schedules', component: MySchedulesComponent },  
        { path: '', redirectTo:'events', pathMatch:"full" }
    ]
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
