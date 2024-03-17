import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginserviceService } from 'src/app/services/loginService/loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isOtpSent:boolean=false
  email:string="";
  otpEmail:string =""
  isMailCheck:boolean=false
  isOTPCheck:boolean=false
  mailErrorMsg:string=""
  otpErrorMsg:string=""
  checkPhone:boolean=false

  constructor(private router: Router,private login:LoginserviceService,private auth:LoginserviceService,private loader:AppComponent,private _snackBar: MatSnackBar,private service:SharedService){
    if (auth.isAuthenticated()) {
      switch (localStorage.getItem('role')) {
        case "1" :
          this.router.navigateByUrl('/admin-panel');
          break;
        
        case "2":
          this.router.navigateByUrl('/select-photos');
          break;
    }
  }
  }

  sendOtp(){
    if(this.email == null || this.email == ""){
      this.checkPhone = true
    } else {
      try {
        this.loader.loader=true;
        this.login.postWithQuery(`/api/auth/GetOTPMail?email=${this.email}`).subscribe((responce:any)=>
       {
        console.log(responce);
        
        if (responce.isSucceeded) {
          this.isMailCheck = false
          this.isOtpSent = true
          this.loader.loader=false;
          this.service.openSnackBar("Otp Sent")
        } else {
          this.mailErrorMsg = responce.returnData
          this.isMailCheck = true
          this.loader.loader=false;
          this.service.openSnackBar(responce.returnData)
        }
      })
      } catch (error) {
        console.log(error);
        
      }
      
    }
  }
  // checkNumber() {
  //   if (String(this.phoneNumber).length > 10) {
  //     this.phoneNumber= String(Math.floor(parseInt(this.phoneNumber)/10));
  //   } 
    
// }
openSnackBar(content:string) {
  this._snackBar.open(content, 'close', {
    horizontalPosition: 'right',
    verticalPosition: 'top',
  });
}
 submitOtp(){
    console.log(this.otpEmail);
    this.loader.loader=true;
    try {
    this.login.postWithQuery(`/api/auth/VerifyOTPMail?email=${this.email}&otp=${this.otpEmail}`).subscribe((responce:any)=> {
      if (responce.isSuccess) {
        this.isOTPCheck = false
        localStorage.setItem('token',responce.userToken.split(":")[1])
        localStorage.setItem('role',responce.userRole) 
        localStorage.setItem('id',responce.userId) 
        // this.router.navigateByUrl('/admin-panel');
        switch (responce.userRole) {
          case "1" :
            this.loader.loader=false;
            this.router.navigateByUrl('/admin-panel');
            break;
          
          case "2":
            this.loader.loader=false;
            this.router.navigateByUrl('/select-photos');
            break;
        }
      } else {
        this.otpErrorMsg = responce.userToken
        this.isOTPCheck = true
        this.loader.loader=false;
      }
    })
    } catch (error) {
      console.log(error);
      this.loader.loader=false;
    }
    // if(this.phoneNumber == null || this.phoneNumber == ""){
      // this.router.navigateByUrl('/select-photos');
    // }
    // else{
      // this.router.navigateByUrl('/admin-panel');
    // }
  }
}
