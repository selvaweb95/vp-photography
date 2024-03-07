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
      return this.http.post(this.baseUrl+`/api/customerpanel/GetCustomerDetails`,"")
  }
  getCoustomerById(id:any):any{
    return this.http.get(this.baseUrl+`/api/adminmanagement/GetCustomerById?customerId=${id}`,{headers: {
      "ngrok-skip-browser-warning": "69420",
    },})
  }
  addToFav(payload:any){
    return this.http.post(this.baseUrl+`/api/customerpanel/AddToFav`,payload)
  }
  removeFav(payload:any){
    return this.http.post(this.baseUrl+`/api/customerpanel/RemoveFromFav`,payload)
  }
  getEvent(){
    return this.http.post(this.baseUrl+`/api/adminmanagement/GetAllEventTypes`,"")
  }
  updateSelectedImage(payload:any){
    return this.http.post(this.baseUrl+`/api/customerpanel/AddSelectedImages`,payload)
  }
}
