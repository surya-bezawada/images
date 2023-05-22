import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GArticlesService {

  constructor(private http:HttpClient) { }

  getArticles(limit:number,offset:number){
    return this.http.get(environment.baseUrl+'articles'+'?limit='+limit+'&offset='+offset);

  }
}
