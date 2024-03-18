import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-dialog-upload-image',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogModule],
  templateUrl: './dialog-upload-image.component.html',
  styleUrl: './dialog-upload-image.component.scss'
})
export class DialogUploadImageComponent {
  loader:boolean=false;
  constructor(private dialogRef: MatDialogRef<DialogUploadImageComponent>,@Inject(MAT_DIALOG_DATA) public data: any){ 
      if (data) {
        console.log(data);
        this.url = data.photos
      }
  }

  isImage = false
  removeImage(data:any){
    this.url.splice(this.url.indexOf(data),1)
  }
  close(){
    this.dialogRef.close(false);
  }
  createEvent(){
    if (this.url[0].name == "") {
      this.isImage = true
    } else {
      this.dialogRef.close(this.url);
    }
  }
  welcomeImage:any;
  
  url: Array<{name:any,file:any}> = [];
  checkimage(event:any){ 
    this.loader = true
      let reader = new FileReader();
      console.log(event.target.files);
      
     let file;
       for (let i=0; i<event.target.files.length ; i++){
            let reader = new FileReader();
            file = event.target.files [i];
            reader.onload = (file:any) => {
              this.url.push({name:event.target.files[i].name,file:reader.result }) 
              if (this.url.length == event.target.files.length) {
                this.loader=false
              }
             }
            reader.readAsDataURL(file)
          }
      this.isImage = false
  }
}
