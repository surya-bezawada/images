import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { comment, comments } from 'src/app/core/Model/comments';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleData:any;
  comments!:string;


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
    this.getCommentList();
  }
  onEdit(slug:string){
    let queryParams = {slug:slug}
   this._routes.navigate(['account/article'],{queryParams})
  }


  commentList:any;
 getCommentList(){
  this.api.getComment(this.articleData.slug).subscribe(res=>{
    console.log(res);
    this.commentList=res.comments;
  })
 }
 saveComments(){
  let form =new comments();
  let body=new comment();
  body.body=this.comments
  form.comment=body;
  this.api.saveComponent(form,this.articleData.slug).subscribe(res=>{
    console.log(res)
    this.getCommentList();
    this.comments=''

 
  })
  
 }

 deleteComments(item:any):void{
  this.api.deleteComments(this.articleData.slug,item.id).subscribe(res=>{
      console.log(res);
      this.getCommentList();
     
  })
}
}
