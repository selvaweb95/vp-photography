import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WhatwedoComponent } from './shared/svgfile/whatwedo/whatwedo.component';
import { WhyusComponent } from './shared/svgfile/whyus/whyus.component';
import { CountUpDirective } from './pages/home/count-up.directive';
import {
  GalleryModule
} from 'ng-gallery';
import { LightboxModule} from 'ng-gallery/lightbox';
import { GalleryComponent } from './gallery/gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    WhatwedoComponent,
    WhyusComponent,
    CountUpDirective,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    GalleryModule,
    LightboxModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
