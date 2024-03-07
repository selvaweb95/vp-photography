import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginService/loginservice.service';

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

  constructor(private router: Router,private login:LoginserviceService,private auth:LoginserviceService){
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
        this.login.postWithQuery(`/api/auth/GetOTPMail?email=${this.email}`).subscribe((responce:any)=>
      {
        console.log(responce);
        
        if (responce.isSucceeded) {
          this.isMailCheck = false
          this.isOtpSent = true
        } else {
          console.log(responce);
          
          this.mailErrorMsg = responce.returnData
          this.isMailCheck = true
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
 submitOtp(){
    console.log(this.otpEmail);
    this.login.postWithQuery(`/api/auth/VerifyOTPMail?email=${this.email}&otp=${this.otpEmail}`).subscribe((responce:any)=> {
      if (responce.isSuccess) {
        this.isOTPCheck = false
        localStorage.setItem('token',responce.userToken.split(":")[1])
        localStorage.setItem('role',responce.userRole) 
        localStorage.setItem('id',responce.userId) 
        // this.router.navigateByUrl('/admin-panel');
        switch (responce.userRole) {
          case "1" :
            this.router.navigateByUrl('/admin-panel');
            break;
          
          case "2":
            this.router.navigateByUrl('/select-photos');
            break;
        }
      } else {
        this.otpErrorMsg = responce.userToken
        this.isOTPCheck = true
      }
    })
    // if(this.phoneNumber == null || this.phoneNumber == ""){
      // this.router.navigateByUrl('/select-photos');
    // }
    // else{
      // this.router.navigateByUrl('/admin-panel');
    // }
  }
}
