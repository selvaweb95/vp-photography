import { Component, HostListener } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sun-electricals';
  stickyHeader = false;
  contactPopup = false;
  mobileMenu = false;
  public loader :boolean=false;
  resizeWidth!:number;
  isMobileMenu:boolean=false;
  contactShow() {
    this.contactPopup = true;
  }
  constructor(private navSer: NavbarService) {
    if(window.innerWidth < 600){
      this.mobileMenu = true;
    }
    console.log(
      window.innerWidth
    );
  }
  navName(name: string) {
    this.navSer.navLink(name);
  }
  menuShow(){
    this.isMobileMenu=true
  }
  menuClose(){
    this.isMobileMenu=false
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll(e: any) {
    const windowScroll: number = window.pageYOffset;
    // console.log('windowScroll',windowScroll);

    if (windowScroll >= 30) {
      this.stickyHeader = true;
    } else {
      this.stickyHeader = false;
    }
   
  }
 
  @HostListener('window:resize', ['$event'])
onResize(e:any) {
  const resizeWidth = window.innerWidth;
  if(resizeWidth < 600){
    this.mobileMenu = true;
  }
  else{
    this.mobileMenu = false;
  }
}
}
