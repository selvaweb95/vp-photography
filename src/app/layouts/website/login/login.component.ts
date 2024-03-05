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
  phoneNumber:string="";
  checkPhone:boolean=false

  constructor(private router: Router,private login:LoginserviceService){}
  sendOtp(){
    if(this.phoneNumber == null || this.phoneNumber == ""){
      this.checkPhone = true
    } else {
      this.login.SendOtp("/sendOTP",this.phoneNumber).subscribe(data=> console.log(data))
      this.isOtpSent = true
    }
  }
  checkNumber() {
    if (String(this.phoneNumber).length > 10) {
      this.phoneNumber= String(Math.floor(parseInt(this.phoneNumber)/10));
    } 
    
}
 submitOtp(){
    console.log(this.phoneNumber);
    
    // if(this.phoneNumber == null || this.phoneNumber == ""){
      // this.router.navigateByUrl('/select-photos');
    // }
    // else{
      this.router.navigateByUrl('/admin-panel');
    // }
  }
}
