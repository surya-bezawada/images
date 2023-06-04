import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { comment, comments } from 'src/app/core/Model/comments';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
selecetedArticleData:any;
slug!:string;
comments!:string;
  onDestroy$ = new Subject<boolean>()
  readArticles:any={};
  constructor(
    private _route: ActivatedRoute,
    private _apiService:ArticlesService,
    private jwt:JwtService
    ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(res=>{
      console.log(res);

      this.getReadMoreData(res?.['slugData']);
      this.slug=res?.['slugData']
      // localStorage.setItem('slugData',JSON.stringify(res?.['slugData']))
      this.getPopularTagsList();
      this.getCommentList();
    })
   this.jwt.seletedArticleData$.subscribe(res=>{
    this.selecetedArticleData=res;
    // this.slug=this.selecetedArticleData.slug;
   })

  }
 getReadMoreData(slug:string) {
  this._apiService.getReadMore(slug).pipe(takeUntil(this.onDestroy$)).subscribe((res:any)=>{
    console.log(res?.article);
    this.readArticles = res?.article

  })
 }
 tags:any;
 getPopularTagsList(){
  this._apiService.getPopularTags().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
    this.tags=res;
    console.log(res)
  })
 }


 commentList:any;
 getCommentList(){
  this._apiService.getComment(this.slug).subscribe(res=>{
    console.log(res);
    this.commentList=res.comments;
  })
 }
 saveComments(){
  let form =new comments();
  let body=new comment();
  body.body=this.comments
  form.comment=body;
  this._apiService.saveComponent(form,this.slug).subscribe(res=>{
    console.log(res)
    this.getCommentList();
    this.comments=''

 
  })
  
 }

 deleteComments(item:any):void{
  this._apiService.deleteComments(this.selecetedArticleData.slug,item.id).subscribe(res=>{
      console.log(res);
      this.getCommentList();
     
  })
}


 


}
