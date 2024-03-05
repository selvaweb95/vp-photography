import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseUrl = `${environment.baseUrl}`

  constructor(private http: HttpClient ) {}

  public postWithQuery(url:string) : any{
    return this.http.post(this.baseUrl+url,"")
  }
  submitOtp(url:string,payload:any){
    return this.http.post(this.baseUrl+url,payload)
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public isAuthenticated(){
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  public logout(){
    localStorage.removeItem('token')
  }
  
}
