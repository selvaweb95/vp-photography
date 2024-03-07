import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarService } from './../../services/navbar.service';
import { LoginserviceService } from 'src/app/services/loginService/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() navId = new EventEmitter();
  navActive: string = 'Home';
  constructor(private navSer: NavbarService,private auth:LoginserviceService,private router:Router) {}
  navName(name: string) {
    this.navSer.navLink(name);
    this.navActive = name;
  }
  getAuthenticate(){
    return this.auth.isAuthenticated();
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    this.router.navigate(['/home'])
  }
  
}
