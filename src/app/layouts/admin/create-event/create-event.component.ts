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
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {
  constructor(public dialog: MatDialog,private http: SharedService,private router:Router,private loader:AppComponent,private route:ActivatedRoute) {
    if (route.snapshot.paramMap.get('id') != "0") {
      this.isDuplicate = true
      loader.loader=true
      http.getCoustomerById(route.snapshot.paramMap.get('id')).subscribe((res:any)=>{
        if (res.isSucceeded) {
          this.eventDetails=res.returnData
          console.log(this.eventDetails);
          loader.loader=false
        }
      })
    }
  }

  welcomeImage:any;
  isDuplicate:boolean = false
  eventValidation = {
    isCustomerName : false,
    isCustomerFullName : false,
    isCustomerPhonenumber : false,
    isCustomerPassword : false,
    isCustomerEmail : false,
    isEventType: false,
    isEventDate: false,
    isCustomerPhoneNumber : false,
    isAlbumValidTill : false,
    isAlbumLimit: false,
    isCustomerWelcomeImage: false,
    isEventList : false,
    isSignature : false,
    isSignatureCoverPic : false
  }

  eventDetails={
    id:0,
    customerName : "",
    customerFullName : "",
    customerPhonenumber: "",
    customerPassword: "",
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
    ],
    signature : [{name:"",file:""}],
    signatureCoverPic:"",
  }

  validateEvent(){
    this.eventValidation = {
      isCustomerName : false,
      isCustomerFullName : false,
      isCustomerPhonenumber : false,
      isCustomerPassword : false,
      isCustomerEmail : false,
      isEventType: false,
      isEventDate: false,
      isCustomerPhoneNumber : false,
      isAlbumValidTill : false,
      isAlbumLimit: false,
      isCustomerWelcomeImage: false,
      isEventList : false,
      isSignature : false,
      isSignatureCoverPic : false
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
        this.eventDetails.albumLimit = '0';
          
      case this.eventDetails.customerWelcomeImage=="" :
          this.eventValidation.isCustomerWelcomeImage = true;

      case this.eventDetails.customerPhonenumber=="" :
            this.eventValidation.isCustomerPhonenumber = true
            
      case this.eventDetails.customerPassword=="" :
            this.eventValidation.isCustomerPassword = true;
      
        
          
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
      width: '90%',
      data: this.eventDetails.eventList[index]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if (result) {
        this.eventDetails.eventList[index].photos = result
        this.eventDetails.eventList[index].isAdded = true;
        this.eventDetails.eventList[index].isValid = false
      }
    });
  }
  AddSignature(){
    const dialogRef = this.dialog.open(DialogUploadImageComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if (result) {
        this.eventDetails.signature = result
      }
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
        if (result) {
          this.eventDetails.eventList[index].photos = result
          this.eventDetails.eventList[index].isAdded = true;
          this.eventDetails.eventList[index].isValid = false
        }
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

  checkSignatureimage(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => { 
          this.eventDetails.signatureCoverPic = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  RemoveSignatureImage(){
    this.eventDetails.signatureCoverPic = ""
  }
  RemoveWelcomeImage()
  {
    this.eventDetails.customerWelcomeImage =""
  }

  addEventDate(date:any){
    this.eventDetails.eventDate = date
  }
  addValidTillDate(date:any){
    this.eventDetails.albumValidTill = date
  }
  addEventType(data:any){
    this.eventDetails.eventType = data
  }

  createEvent(){  
    if (this.validateEvent()) {
      this.loader.loader = true
      this.http.createEvent(this.eventDetails).subscribe((res)=>{
        if (res) {
          this.loader.loader = false
          this.http.openSnackBar("Event Created")
          this.router.navigateByUrl('/admin-panel');
        }
      }) 
    }
  }
  createDuplicteEvent(){
    if (this.validateEvent()) {
      this.eventDetails.id = 0;
      this.loader.loader = true
      this.http.createEvent(this.eventDetails).subscribe((res)=>{
        if (res) {
          this.loader.loader = false
          this.http.openSnackBar("Duplicate Event Created")
          this.router.navigateByUrl('/admin-panel');
        }
      }) 
    }
  }

}
