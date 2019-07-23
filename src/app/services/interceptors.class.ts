import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from './api.service';


/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private router: Router, private api: ApiService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const exclude = ["/login", "/registeruser", "/checkusername"];
        const authToken = localStorage.getItem("authToken");
        const cloned = req.clone({
            headers: req.headers.set("Authorization",
                "Bearer " + authToken)
        });
        return next.handle(cloned).pipe(
            catchError(this.errorHandler)
        )
    }
    errorHandler = (error: HttpErrorResponse) => {
        let errorMessage = '';
        // if (error.error instanceof ErrorEvent) {
        //     // client-side error
        //     errorMessage = `Error: ${error.error.message}`;
        //     if (error.status === 401) {
        //         this.api.logout(() => {
        //             this.router.navigate(["/authentication/login", { data: "You must login first" }]);
        //         });
        //     }
        // } else {
            console.log(error);
            errorMessage = `Error: ${error.error.message}`;
            if (error.status === 401) {
                let message = "";
                if(error.error.error === "USER_INACTIVE") {
                    message = "User is inactive";
                } else {
                    message = "You must login first";
                }
                this.api.logout(() => {
                    this.router.navigate(["/authentication/login", { data: message }]);
                });
            }
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        //}
        // window.alert(errorMessage);
        return throwError(errorMessage);
    }
    excludeUrl = (exclude: Array<any>) => {

    }
}
