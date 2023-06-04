
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private profile =new BehaviorSubject<any>(null);
  profile$ = this.profile.asObservable();

  private token = new BehaviorSubject<any>(null);
  token$ = this.token.asObservable();

  private viewArticle = new BehaviorSubject<any>(null);
  viewArticle$ = this.viewArticle.asObservable();

  private afterLogIn = new BehaviorSubject<any>(null);
  logIn$ = this.afterLogIn.asObservable();


  private seletedArticleData = new BehaviorSubject<any>(null);
  seletedArticleData$ = this.seletedArticleData.asObservable();

  storeLogInStatus(event: boolean) {
    this.afterLogIn.next(event);
  }

  getSelectedArticleData(data: any) {
    this.seletedArticleData.next(data);
  }


  storeToken(event: any) {
    console.log(event);
    this.token.next(event);
  }

  stoteViewArticle(data: any) {
    this.viewArticle.next(data)
  }

  getProfile(data:any){
    this.profile.next(data);
  }



}
