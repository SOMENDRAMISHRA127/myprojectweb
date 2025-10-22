import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environemt/environment.development';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

   profileEvent = new Subject<void>();

  profileEvent$ = this.profileEvent.asObservable();
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl

  
  isLoggedIn() {
    let loggedIn = false;
    let userData = localStorage.getItem('nuzul');
    if (userData == null) {
        loggedIn = false
    } else {
        loggedIn = true
    }
    return loggedIn;
}

  post(url: any, data: any) {
    return this.http.post(`${this.baseUrl}api${url}`, data);
  }

  put(url: any, data: any) {
    return this.http.put(`${this.baseUrl}api/v1/admin/${url}`, data);
  }
  patch(url: any, data: any) {
    return this.http.patch(`${this.baseUrl}api/v1/admin/auth/${url}`, data);
  }

}
