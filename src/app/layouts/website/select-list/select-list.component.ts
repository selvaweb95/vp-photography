import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrl: './select-list.component.scss'
})
export class SelectListComponent {
  welcomeImage:string="";
  response:any
  isloaded:boolean=false
  constructor(private router:Router,private service:SharedService) {
    this.service.getCoustomerDetails().subscribe((res:any)=>{
      this.isloaded=true
      console.log(res);
      if (res.isSucceeded) {
        console.log(res.returnData.customerWelcomeImage);
        this.response = res.returnData
        this.welcomeImage = res.returnData.customerWelcomeImage
        console.log("this.welcomeImage ",this.welcomeImage );
        this.isloaded=false
      }
    })
  }

  navigateTo(url:string){
    this.router.navigate([url], { state: { image: this.welcomeImage,coustomerName:this.response.customerName,tabs:this.response.eventList,eventDate: this.response.eventDate,FavouriteList: this.response.favouriteList,albumLimit : this.response.albumLimit } });
  }
}
