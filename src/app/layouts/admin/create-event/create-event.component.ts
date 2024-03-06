import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogUploadImageComponent } from '../dialog/dialog-upload-image/dialog-upload-image.component';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {
  constructor(public dialog: MatDialog,private http: SharedService,router:Router) {
    if (router.getCurrentNavigation()?.extras.state?.['id']) {
      http.getCoustomerById(router.getCurrentNavigation()?.extras.state?.['id']).subscribe((res:any)=>{
        if (res.isSucceeded) {
          this.eventDetails=res.returnData
          console.log(this.eventDetails);
          
        }
      })
    }
  }

  welcomeImage:any;
  eventValidation = {
    isCustomerName : false,
    isCustomerFullName : false,
    isCustomerEmail : false,
    isEventType: false,
    isEventDate: false,
    isCustomerPhoneNumber : false,
    isAlbumValidTill : false,
    isAlbumLimit: false,
    isCustomerWelcomeImage: false,
    isEventList : false
  }

  eventDetails={
    id:0,
    customerName : "",
    customerFullName : "",
    customerEmail : "",
    eventType: "",
    eventDate: "",
    customerPhoneNumber : "",
    albumValidTill : "",
    albumLimit: "",
    customerWelcomeImage: "",
    eventList:[
      {
        eventName:"",
        photos:[{name:"",file:""}],
        isAdded:false,
        isValid:false
      }
    ]
  }

  validateEvent(){
    this.eventValidation = {
      isCustomerName : false,
      isCustomerFullName : false,
      isCustomerEmail : false,
      isEventType: false,
      isEventDate: false,
      isCustomerPhoneNumber : false,
      isAlbumValidTill : false,
      isAlbumLimit: false,
      isCustomerWelcomeImage: false,
      isEventList : false
    }
    switch (true) {
      case this.eventDetails.customerName=="" :
          this.eventValidation.isCustomerName = true
     
      case this.eventDetails.customerFullName=="" :
          this.eventValidation.isCustomerFullName = true
          
      case this.eventDetails.customerEmail=="" :
          this.eventValidation.isCustomerEmail = true  
          
      // case this.eventDetails.eventType=="" :
      //     this.eventValidation.isEventType = true
      //     return false
      case this.eventDetails.eventDate=="" :
          this.eventValidation.isEventDate = true
          
      case this.eventDetails.albumValidTill== "" :
          this.eventValidation.isAlbumValidTill = true
          
      case this.eventDetails.albumLimit=="" :
          this.eventValidation.isAlbumLimit = true
          
      case this.eventDetails.customerWelcomeImage=="" :
          this.eventValidation.isCustomerWelcomeImage = true;
          
    }
      

      for (let index = 0; index < this.eventDetails.eventList.length; index++) {   
        if (this.eventDetails.eventList[index].eventName == "") {
          this.eventValidation.isEventList = true
          return false
        } else { this.eventValidation.isEventList = false }
      }
      const hasValue = (obj:any, value:any) => Object.values(obj).includes(value);
      if (hasValue(this.eventValidation,true)) {
        return false
      }
      return true
    
  }

  editEventList(index:any){
    const dialogRef = this.dialog.open(DialogUploadImageComponent, {
      height: '70%',
      width: '75%',
      data: this.eventDetails.eventList[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.eventDetails.eventList[index].photos = result
      this.eventDetails.eventList[index].isAdded = true;
      this.eventDetails.eventList[index].isValid = false
    });
  }

  updateNewEvent(index:any){
    if (this.eventDetails.eventList[index].eventName == "") {
      this.eventDetails.eventList[index].isValid = true
    } else {  
      const dialogRef = this.dialog.open(DialogUploadImageComponent, {
        height: '70%',
        width: '75%',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed',result);
        this.eventDetails.eventList[index].photos = result
        this.eventDetails.eventList[index].isAdded = true;
        this.eventDetails.eventList[index].isValid = false
      });
    }
  }

  removeEvent(index:any){
    this.eventDetails.eventList.splice(index, 1)
  }

  addNewEvent(){
    this.eventDetails.eventList.push({
      eventName:"",
      photos:[],
      isAdded:false,
      isValid:false
    })
  }

  checkimage(event:any){
    console.log(this.welcomeImage);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => { 
          this.eventDetails.customerWelcomeImage = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  RemoveWelcomeImage()
  {
    this.eventDetails.customerWelcomeImage =""
  }

  addEventDate(date:string){
    this.eventDetails.eventDate = date
  }
  addValidTillDate(date:string){
    this.eventDetails.albumValidTill = date
  }

  createEvent(){
    console.log(this.eventDetails,this.eventValidation);
    console.log(typeof(this.eventDetails.albumValidTill));
    console.log(this.validateEvent());
    
    if (this.validateEvent()) {
      this.http.createEvent(this.eventDetails).subscribe((res)=>{
        console.log(res);
        
      }) 
    }
  }

}
