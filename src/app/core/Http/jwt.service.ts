
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private token = new BehaviorSubject<any>(null);
  token$ = this.token.asObservable();

  // private afterLogIn = new BehaviorSubject<any>(null);
  // logIn$ = this.afterLogIn.asObservable();

  // storeLogInStatus(event:boolean){
  //     this.afterLogIn.next(event);
  // }
  storeToken(event:any){
      console.log(event);
      this.token.next(event);
  }

  


}
