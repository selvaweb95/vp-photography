import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl = `${environment.baseUrl}`

  constructor(private http: HttpClient ) {}
  createEvent(payload:any){
    return this.http.post(this.baseUrl+"/api/adminmanagement/AddCustomer",payload)
  }
  // getAllEvent():any{ 
  //   return this.http.post(this.baseUrl+`/api/adminmanagement/GetAllEvents?adminId=${localStorage.getItem('id')}`,"")
  // }
  getAllEvent():any{ 
    return this.http.post(this.baseUrl+`/api/adminmanagement/GetAllEventsById`,"")
  }
  getCoustomerDetails():any{ 
      return this.http.post(this.baseUrl+`api/customerpanel/GetCustomerDetails`,"")
  }
}
