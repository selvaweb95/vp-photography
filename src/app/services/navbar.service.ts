import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public navId = new EventEmitter();
  constructor() { }
  navLink(name:any){
    this.navId.emit(name);
  }
}
