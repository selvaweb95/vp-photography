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
import { LoginserviceService } from 'src/app/services/loginService/loginservice.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {
  constructor(public dialog: MatDialog,private http: LoginserviceService) {}

  welcomeImage:any;
  url:any = "";

  eventDetails={
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
        photos:[],
        isAdded:false
      }
    ]
  }

  addEventName(event:any){
    console.log(event);
    
  }

  updateNewEvent(index:any){
    this.openDialog(index);
    this.eventDetails.eventList[index].isAdded = true;
  }

  removeEvent(index:any){
    this.eventDetails.eventList.splice(index, 1)
  }

  addNewEvent(){
    this.eventDetails.eventList.push({
      eventName:"",
      photos:[],
      isAdded:false
    })
    console.log(this.eventDetails);
  }

  checkimage(event:any){
    console.log(this.welcomeImage);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event:any) => {
          this.url = event.target.result;  
          this.eventDetails.customerWelcomeImage = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  openDialog(index:any): void {
    const dialogRef = this.dialog.open(DialogUploadImageComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      // this.animal = result;
      this.eventDetails.eventList[index].photos = result

    });
  }

  RemoveWelcomeImage()
  {
    this.url=""
  }

  addEventDate(date:string){
    this.eventDetails.eventDate = date
  }
  addValidTillDate(date:string){
    this.eventDetails.albumValidTill = date
  }

  createEvent(){
    console.log(this.eventDetails);
    this.http.createEvent(this.eventDetails).subscribe((res)=>{
      console.log(res);
      
    })
  }

}
