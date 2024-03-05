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
  otp: number=0
  checkPhone:boolean=false

  constructor(private router: Router,private login:LoginserviceService){}
  checkOtp(){
    console.log(this.otpEmail);
    
  }
  sendOtp(){
    this.router.navigateByUrl('/admin-panel');
    if(this.email == null || this.email == ""){
      this.checkPhone = true
    } else {
      this.login.postWithQuery(`/api/auth/GetOTPMail?email=${this.email}`).subscribe((responce:any)=>
      {
        if (responce.isSucceeded) {
          this.isOtpSent = true
        }
      })
    }
  }
  // checkNumber() {
  //   if (String(this.phoneNumber).length > 10) {
  //     this.phoneNumber= String(Math.floor(parseInt(this.phoneNumber)/10));
  //   } 
    
// }
 submitOtp(){
    console.log(this.otp);
    this.login.postWithQuery(`/api/auth/VerifyOTPMail?email=${this.email}&otp=${this.otp}`).subscribe((responce:any)=> {
      if (responce.isSuccess) {
        localStorage.setItem('token',responce.userToken.split(":")[1])
        this.router.navigateByUrl('/admin-panel');
        // switch (responce.role) {
        //   case 1 :
        //     this.router.navigateByUrl('/admin-panel');
        //     break;
          
        //   case 2:
        //     this.router.navigateByUrl('/select-photos');
        //     break;
        // }
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
