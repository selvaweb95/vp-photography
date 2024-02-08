import { Component } from '@angular/core';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrl: './user-photos.component.scss'
})
export class UserPhotosComponent {
  tabs:string[]=['Reception','Engagement','Marriage'];
  activetedTabIndex:string=this.tabs[0];
  tabChange(tabIndex:string){
    this.activetedTabIndex=tabIndex;
  }
}
