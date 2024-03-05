import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-dialog-upload-image',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './dialog-upload-image.component.html',
  styleUrl: './dialog-upload-image.component.scss'
})
export class DialogUploadImageComponent {
  constructor(private dialogRef: MatDialogRef<DialogUploadImageComponent>){ }
  isImage = false
  createEvent(){
    if (this.url[0].name == "") {
      this.isImage = true
    } else {
      this.dialogRef.close(this.url);
    }
  }
  welcomeImage:any;
  url: Array<any> = [];
  checkimage(event:any){ 
      let reader = new FileReader();
      console.log(event.target.files);
      
     let file;
       for (let i=0; i<event.target.files.length ; i++){
        this.url.push({name:"",file:""})
        this.url[i].name=event.target.files[i].name;
            let reader = new FileReader();
            file = event.target.files [i];
            reader.onload = (file:any) => {
              this.url[i].file=reader.result;
             }
            reader.readAsDataURL(file)
          }
      this.isImage = false

  }
}
