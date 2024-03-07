import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrl: './user-photos.component.scss'
})
export class UserPhotosComponent {
  // tabs:string[]=['Reception','Engagement','Marriage'];
  tabs:Array<any>=[];
  activetedTabIndex:string | undefined; 
  landingImg:boolean=true;
  welcomeImage!: string;
  coustomerName!:string;
  eventDate!:string;
  FavouriteList:any
  albumLimit:any
  activeEvent:any;
  constructor(private service:SharedService,private router: Router){
    if (router.getCurrentNavigation()?.extras.state?.['image']) {
      this.welcomeImage = router.getCurrentNavigation()?.extras.state?.['image'];
      this.FavouriteList = router.getCurrentNavigation()?.extras.state?.['FavouriteList']; 
      this.albumLimit = router.getCurrentNavigation()?.extras.state?.['albumLimit']; 
    
    // this.service.getCoustomerDetails().subscribe((res:any)=>{
        this.coustomerName = router.getCurrentNavigation()?.extras.state?.['coustomerName']
        this.tabs = router.getCurrentNavigation()?.extras.state?.['tabs']
        console.log(this.tabs);
        
        let date = new Date(router.getCurrentNavigation()?.extras.state?.['eventDate'].split("T")[0]);
        this.eventDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        // this.landingImg = true

      setTimeout(() => {
        this.landingImg=false
      }, 5000);
      this.activeEvent=this.tabs[0]
      this.activetedTabIndex =this.tabs[0].eventName;
    }
    // })
  }
  tabChange(tabIndex:any){
    this.selectedImage=[]
    console.log("tabIndex",tabIndex);
    this.activeEvent=tabIndex;
    this.activetedTabIndex=tabIndex?.eventName;
  }
  selectedImage:any=[];
  updateSelectedImage(image:any){
    console.log("imagw",image);
    this.selectedImage=image;
  }
  AddToAlbum(){
    let data={ "eventName" : this.activeEvent.eventName, selectedImage : this.selectedImage }
    this.service.updateSelectedImage(data).subscribe((data)=>{
      console.log(data);
    })
  }
}
