import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-upload-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-upload-image.component.html',
  styleUrl: './dialog-upload-image.component.scss'
})
export class DialogUploadImageComponent {
  constructor(private dialogRef: MatDialogRef<DialogUploadImageComponent>){ }
  createEvent(){
    console.log();
    this.dialogRef.close(this.url);
  }
  welcomeImage:any;
  url: Array<any> = [];
  checkimage(event:any){ 
    // if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
    //   reader.onload = (event:any) => {
    //       this.url.push(event.target.result);
    //   }
    //   for (let index = 0; index < event.target.files.length; index++) {
    //     setTimeout(() => {
    //       reader.readAsDataURL(event.target.files[index]);
    //     }, 1000);
    //   }
    // }

     let file;
       for (let i=0; i<event.target.files.length ; i++){
            let reader = new FileReader();
            file = event.target.files [i];
            reader.onload = (file:any) => {
              this.url[i]=reader.result;
              console.log(this.url);
              
             }
            reader.readAsDataURL(file)
        }
    
    
  }
}
