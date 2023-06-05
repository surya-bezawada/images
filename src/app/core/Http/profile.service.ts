import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  
  getMyPost(author:string,limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'?author='+author+'&limit='+limit+'&offset='+offset)
  }

  getFavoritPost(author:string,limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'?favorited='+author+'&limit='+limit+'&offset='+offset)

  }
  profilePageAction(author:string){
    return this.http.get(environment.baseUrl+'profiles/'+author)
  }
}
