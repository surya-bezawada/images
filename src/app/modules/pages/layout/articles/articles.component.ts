import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { Article, NewArticle } from 'src/app/core/Model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  onDestroy$ = new Subject<boolean>()
  myForm!:FormGroup;
    constructor(private api:ArticlesService,private fb:FormBuilder) { }
  
    ngOnInit() {
      this.myForm = this.fb.group({
        body:['',[Validators.required]],
        description: ['',[Validators.required]],
        tagList:['',[Validators.required]],
        title:['',[Validators.required]],
     
       
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
          console.log(res);
        })
        this.myForm.reset();
      
  
      }
    
}
