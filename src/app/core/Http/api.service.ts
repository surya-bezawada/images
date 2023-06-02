import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, distinctUntilChanged, map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../Model/user";
import { JwtService } from "./jwt.service";

@Injectable({
    providedIn: 'root'
  })

  export class ApiService{
    

  constructor(private http:HttpClient,private router:Router,private  jwtService:JwtService){
    
  }

 

  //getting articles
  getArticles(Limit:number,Offset:number):Observable<any>{
      return this.http.get(environment.baseUrl+'articles?limit='+Limit+'&offset='+Offset)
  }


//signup
  registration(credentials: {
    username: string;
    email: string;
    password: string;
  }):Observable<{user:User}>{
    return this.http.post<{user:User}>(environment.baseUrl+'users',{user:credentials})

  }

  //singin
  login(credentials:{
    email: string;
    password: string;

  }):Observable<{user:User}>{
    return this.http.post<{user:User}>(environment.baseUrl+'users/login',{user:credentials})

  }

  //logout
  logout() {
    
   this.router.navigate(["user/auth"]);

  }


  //setting 
  update(user: Partial<User>): Observable<any> {
    
    return this.http.put<{ user: User }>(environment.baseUrl+"user",  {user} )
     
  }


}