import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginService/loginservice.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private auth: LoginserviceService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.isAuthenticated()) {    
            // Clone the request to avoid mutating the original request
            const authRequest = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });

            // Log the request body before sending it
            console.log('Request Body:', authRequest.body);

            // Pass the cloned request to the next handler
            return next.handle(authRequest);
        } else {
            // If user is not authenticated, pass the original request to the next handler
            return next.handle(request);
        }
    }
}
