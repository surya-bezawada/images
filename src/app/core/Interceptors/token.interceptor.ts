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
      let token;
    this.jwt.token$.subscribe(res=>{
      token = res?.token;
    })

      // Clone the request and set the token in the headers
      if (token) {
        request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`,
          },
      });
      }
  
      return next.handle(request);
    }
}
