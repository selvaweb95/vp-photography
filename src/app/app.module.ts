import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CreateEventComponent } from './layouts/admin/create-event/create-event.component';
import { SelectControlComponent } from './layouts/admin/components/select-control/select-control.component';
import { DatepickerControlComponent } from './layouts/admin/components/datepicker-control/datepicker-control.component';
import { InputControlComponent } from './layouts/admin/components/input-control/input-control.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogUploadImageComponent } from './layouts/admin/dialog/dialog-upload-image/dialog-upload-image.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './services/auth-interceptor.service';
export function momentAdapterFactory() {
  return adapterFactory(moment);
};
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
    AdminPanelComponent,
    CreateEventComponent,
    SelectControlComponent,
    DatepickerControlComponent,
    InputControlComponent
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
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    HttpClientModule,
    FullCalendarModule,
    DialogUploadImageComponent,
    BrowserModule,
    CommonModule
  ],
  providers: [provideAnimations(),{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
