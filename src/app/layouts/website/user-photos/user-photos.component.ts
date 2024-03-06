import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrl: './user-photos.component.scss'
})
export class UserPhotosComponent {
  tabs:string[]=['Reception','Engagement','Marriage'];
  activetedTabIndex:string=this.tabs[0];
  landingImg:boolean=false;
  welcomeImage!: string;
  constructor(private service:SharedService){
    this.service.getCoustomerDetails().subscribe((res:any)=>{
      console.log(res);
      if (res.isSucceeded) {
        this.welcomeImage = res.returnData.customerWelcomeImage
        this.landingImg = true
        setTimeout(() => {
          this.landingImg=false
        }, 1500);
      }
    })
  }
  tabChange(tabIndex:string){
    this.activetedTabIndex=tabIndex;
  }
}
