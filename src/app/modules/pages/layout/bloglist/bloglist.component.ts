import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/core/Http/articles.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  onDestroy$ = new Subject<boolean>()
  readArticles:any={};
  constructor(
    private _route: ActivatedRoute,
    private _apiService:ArticlesService
    ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(res=>{
      console.log(res);
      this.getReadMoreData(res?.['slugData'])
      this.getPopularTagsList();
    })
  }
 getReadMoreData(slug:string) {
   console.log('151');
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

}