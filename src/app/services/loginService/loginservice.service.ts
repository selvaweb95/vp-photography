import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseUrl = `${environment.baseUrl}`

  constructor(private http: HttpClient ) {}

  SendOtp(url:string,payload:any){
    return this.http.post(this.baseUrl+url,payload)
  }
  submitOtp(url:string,payload:any){
    return this.http.post(this.baseUrl+url,payload)
  }
  createEvent(payload:any){
    return this.http.post(this.baseUrl+"/api/adminmanagement/AddCustomer",payload)
  }
}
