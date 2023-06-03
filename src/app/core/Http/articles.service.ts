import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

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
 getComment(slug:any):Observable<any>{
  return this.http.get(environment.baseUrl+'articles'+'/'+slug+'/'+'comments')
}
saveComponent(body:any,slug:any):Observable<any>{
  return this.http.post(environment.baseUrl+'articles'+'/'+slug+'/'+'comments',body);
}
deleteComments(slug:any,id:any):Observable<any>{
  return this.http.delete(environment.baseUrl+'articles'+'/'+slug+'/'+'comments'+'/'+id)
}

  
}
