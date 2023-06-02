import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewArticle } from '../Model/article';
import { Comments } from '../Model/comments';
import { Setting } from '../Model/setting';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  slug!:string;


  constructor(private http:HttpClient,private jwt:JwtService) { }
  

  //get global articles
  getArticles(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'?limit='+limit+'&offset='+offset);

  }

  //get your feed
  getYFeedArticles(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles/feed'+'?limit='+limit+'&offset='+offset);

  }
  getReadMore(slug:string) {
    return this.http.get(environment.baseUrl+'articles'+'/'+slug)
  }

  //popular tages
  getPopularTags(){
    return this.http.get(environment.baseUrl+'tags')
  } 


  getFeed(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'/feed'+'?limit='+limit+'&offset='+offset);

  }
  
  //add articles
 AddArticle(body: any):Observable<any>{
  return  this.http.post(environment.baseUrl+'articles',body)

 }


 //comments
 getComment():Observable<any>{
  
  this.jwt.token$.subscribe(res=>{
    this.slug=res;
    console.log(res)
  })
  return this.http.get(environment.baseUrl+'articles'+'/slug'+'/comments')
}


  
}
