import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
  

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          access_token: ` ${token}`
        }
      });

      
      console.log('🔹 Headers with Token:', cloned.headers);

      return next.handle(cloned);
    }

    return next.handle(req);
  }
}

