import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginInput={
    phoneNumber:'',

  }
  constructor(private router: Router){}
  navgator(){
    console.log(this.loginInput.phoneNumber);
    
    if(this.loginInput.phoneNumber == null || this.loginInput.phoneNumber == ''){
      this.router.navigateByUrl('/select-photos');
    }
    else{
      this.router.navigateByUrl('/admin-panel');
    }
  }
}
