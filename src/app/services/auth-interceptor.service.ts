import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginService/loginservice.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private auth : LoginserviceService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        console.log("Interceptor" , request.headers);
        
        return next.handle(request)
    }
}