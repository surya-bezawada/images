import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { Article, NewArticle } from 'src/app/core/Model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  onDestroy$ = new Subject<boolean>()
  myForm!:FormGroup;
    constructor(
      private api:ArticlesService,
      private fb:FormBuilder,private jwt :JwtService,
      private _activeRoute:ActivatedRoute,
      private route:Router) { }
  
    ngOnInit() {
      this.myForm = this.fb.group({
        body:['',[Validators.required]],
        description: ['',[Validators.required]],
        tagList:['',[Validators.required]],
        title:['',[Validators.required]],
     
       
      })
      this._activeRoute.queryParams.subscribe(res=>{
        console.log(res);
        this.getArticleData(res?.['slug'])
      })
  
    }
  
    updateSettings(){
      let form = new NewArticle();
      form.title=this.myForm.get('title')?.value;
      form.description=this.myForm.get('description')?.value;
      form.body=this.myForm.get('body')?.value;
      let tagList=[];
      let tags=this.myForm.get('tagList')?.value;
      tagList.push(tags);
      let article =new Article();
     article.article=form;
      // if(this.myForm.valid){
        this.api.AddArticle(article).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
          this.jwt.stoteViewArticle(res.article)
          
            this.route.navigate(['account/view-article'])
          
          
        })
        this.myForm.reset();
        
      
  
      }
      getArticleData(slug:string) {
        console.log(slug);
        this.api.getReadMore(slug).pipe(takeUntil(this.onDestroy$)).subscribe((res:any)=>{
          console.log(res);
          // if(res.status === 200){
            this.patchData(res?.article)
          // }
        })
      }
      patchData(data:any) {
        console.log(data);
        this.myForm.patchValue({
          title:data?.title,
          body:data?.body,
          description:data?.description,
          tagList:data?.tagList
        })
      }
    
}
