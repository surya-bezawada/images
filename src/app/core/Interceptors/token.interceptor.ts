import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../Http/jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private jwt: JwtService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
      const token = localStorage.getItem('token');

      // Clone the request and set the token in the headers
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        request = request.clone({ headers });
      }
  
      return next.handle(request);
    }
}
