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
    private token!: string;
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser = this.currentUserSubject
      .asObservable()
      .pipe(distinctUntilChanged());
  
    public isAuthenticated = this.currentUser.pipe(map((user) => !!user));

  constructor(private http:HttpClient,private router:Router,private  jwtService:JwtService){
    
  }

  setAuth(user: User): void {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
  }

  purgeAuth(): void {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
  }

  getArticles(Limit:number,Offset:number):Observable<any>{
      return this.http.get(environment.baseUrl+'articles?limit='+Limit+'&offset='+Offset)
  }

  registration(credentials: {
    username: string;
    email: string;
    password: string;
  }):Observable<{user:User}>{
    return this.http.post<{user:User}>(environment.baseUrl+'users',{user:credentials})

  }

  login(credentials:{
    email: string;
    password: string;

  }):Observable<{user:User}>{
    return this.http.post<{user:User}>(environment.baseUrl+'users/login',{user:credentials}).pipe(tap(({ user }) =>{
      const token=user.token;
      this.setToken(token);
    }));

  }

  logout() {
    this.purgeAuth();
    void this.router.navigate(["/user/auth"]);

  }

  update(user: Partial<User>): Observable<{ user: User }> {
    return this.http.put<{ user: User }>(environment.baseUrl+"user", { user }).pipe(
      tap(({ user }) => {
        this.currentUserSubject.next(user);
      })
    );
  }

  setToken(token: string) {
    this.token = token;
    // You can also store the token in local storage or a cookie for persistence
  }

  getToken(): string {
    return this.token;
  }
}