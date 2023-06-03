import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleData:any;

  constructor(
    private api:ArticlesService,
    private _routes:Router,
    private jwt:JwtService) { }

  ngOnInit(): void {
    
    this.jwt.viewArticle$.subscribe(res=>{
      this.articleData=res;
      console.log(this.articleData)
      console.log(res)
    })
  }
  onEdit(slug:string){
    let queryParams = {slug:slug}
   this._routes.navigate(['account/article'],{queryParams})
  }
}
