import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class ApiService{
    constructor(private http:HttpClient){
    }

    getArticles(Limit:number,Offset:number):Observable<any>{
        return this.http.get(environment.baseUrl+'articles?limit='+Limit+'&offset='+Offset)
    }

  }