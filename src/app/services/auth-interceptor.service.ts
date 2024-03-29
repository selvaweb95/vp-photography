import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { LoginserviceService } from "./loginService/loginservice.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private auth : LoginserviceService,private router:Router,private loader:AppComponent) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (this.auth.isAuthenticated()) {    
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }
        return next.handle(request).pipe(
            catchError((error) => {
                this.loader.loader=false
              if (error instanceof HttpErrorResponse
              ) {
                if (error.error == "UnAuthrized") {
                    this.loader.loader=false
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')
                    localStorage.removeItem('id')
                    this.router.navigate(['/home'])
                    this.loader.loader=false
                }
              }
      
              return throwError(() =>{ 
                console.log("error",error.error);
                if (error.error.type == "error") {   
                    console.log("true");
                    
                    this.loader.loader=false
                }
            });
            })
          );
    }
}