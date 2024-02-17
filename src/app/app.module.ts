import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {
  GalleryModule
} from 'ng-gallery';
import { LightboxModule} from 'ng-gallery/lightbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GalleryComponent } from './layouts/website/components/gallery/gallery.component';
import { TabsComponent } from './layouts/website/components/tabs/tabs.component';
import { UserPhotosComponent } from './layouts/website/user-photos/user-photos.component';
import { LoginComponent } from './layouts/website/login/login.component';
import { HomeComponent } from './layouts/website/home/home.component';
import { SelectListComponent } from './layouts/website/select-list/select-list.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { MySchedulesComponent } from './layouts/admin/my-schedules/my-schedules.component';
import { EventsComponent } from './layouts/admin/events/events.component';
import { AdminPanelComponent } from './layouts/admin/admin-panel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    TabsComponent,
    UserPhotosComponent,
    LoginComponent,
    SelectListComponent,
    DashboardComponent,
    MySchedulesComponent,
    EventsComponent,
    AdminPanelComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    GalleryModule,
    LightboxModule,
    MatSlideToggleModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
