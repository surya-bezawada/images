import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Setting } from '../Model/setting';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }

  getArticles(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'?limit='+limit+'&offset='+offset);

  }
  getReadMore(slug:string) {
    return this.http.get(environment.baseUrl+'articles'+'/'+slug)
  }

  getPopularTags(){
    return this.http.get(environment.baseUrl+'tags')
  } 

  getFeed(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'/feed'+'?limit='+limit+'&offset='+offset);

  }
  
  PutSettings(settings: {
    bio:string;
    email: string;
    image:string;
    password: string;
    username: string;
   
  }):Observable<{user:Setting}>{
    return this.http.put<{user:Setting}>(environment.baseUrl+'user',{user:settings})

  }
}
