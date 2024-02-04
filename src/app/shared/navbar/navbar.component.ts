import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarService } from './../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() navId = new EventEmitter();
  navActive: string = 'Home';
  constructor(private navSer: NavbarService) {}
  navName(name: string) {
    this.navSer.navLink(name);
    this.navActive = name;
  }
  
}
