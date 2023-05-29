import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../Http/api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private accountService: ApiService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      localStorage.setItem('myItem', 'myValue');
        const gettToken =  localStorage.getItem('myItem');;
        console.log('token string', gettToken);
    
      if(gettToken){
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${gettToken}` , 
          'Content-Type':'application/json'
        
        }
      
      });
    }
      return next.handle(request);
    }
}
