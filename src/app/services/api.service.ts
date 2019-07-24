import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, debounceTime, take, distinctUntilChanged } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class ApiService {
    apiURL: string = "http://localhost:3000";
    jwtService = new JwtHelperService();
    prevUrl: string = "";
    constructor(private http: HttpClient) {

    }

    isLoggedIn() {
        let bool = false;
        try {
            const token = localStorage.getItem("authToken");
            this.jwtService.decodeToken(token);
            bool = !this.jwtService.isTokenExpired(token);
        } catch (e) {
            bool = false;
        }
        return bool;
    }

    getUsers() {
        return this.http.get( this.apiURL + '/chatapp/getusers').pipe();
    }
    loginUser(userData) {
        return this.http.post<any>(this.apiURL + "/authentication/loginuser", userData);
    }
    logout(cb) {
        localStorage.removeItem("authToken");
        cb();
    }
    getUserInfo(id) {
        return this.http.get(this.apiURL + '/chatapp/getuserinfo?chatterId=' + id).pipe();
    }
}