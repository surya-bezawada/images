import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {

  onDestroy$ = new Subject<boolean>()

  constructor(
    private service: ArticlesService,
    private _routers:Router,
    private jwt:JwtService,
    ) { }
  imageArray:String[]=[]
  count:number = 197;
  countArray:number[] = [];
  countIncrese:number = 0;
  ngOnInit(): void {
    let limitIndex = 10;
    let offSetIndex = 0;
    this.getGlobalArticles(limitIndex,offSetIndex)
    let img1='./assets/blog-1.jpg'
    let img2='./assets/blog-2.jpg'
    let img3='./assets/blog-3.jpg'
    let img4='./assets/blog-4.jpg'
    let img5='./assets/blog-5.jpg'
    let img6='./assets/blog-6.jpg'
    let img7='./assets/blog-recent-1.jpg'
    let img8='./assets/blog-inside-post.jpg'
    let img9='./assets/blog-recent-4.jpg'
    let img10='./assets/blog-recent-5.jpg'
 
    this.imageArray=[
img1, img2, img3, img4,img5,img6,img7,img8,img9,img10
    ]
    this.getYourArticles(limitIndex,offSetIndex)
    let img11='./assets/blog-1.jpg'
    let img12='./assets/blog-2.jpg'
    let img13='./assets/blog-3.jpg'
    let img14='./assets/blog-4.jpg'
    let img15='./assets/blog-5.jpg'
    let img16='./assets/blog-6.jpg'
    let img17='./assets/blog-recent-1.jpg'
    let img18='./assets/blog-inside-post.jpg'
    let img19='./assets/blog-recent-4.jpg'
    let img20='./assets/blog-recent-5.jpg'
 
    this.imageArray=[
img11, img12, img13, img14,img15,img16,img17,img18,img19,img20
    ]
   

    this.getPagination();
    this.getPopularTagsList();
    this.getYourArticles(limitIndex,offSetIndex);
    this.getAtricleTitleTags();
  }

  articles:any;
getGlobalArticles(limitIndex:number,offSetIndex:number){
  this.service.getArticles(limitIndex,offSetIndex).subscribe((res:any)=>{
   // console.log(res);
  // let slugData=res?.article.slug;
  // this.jwt.storeToken(slugData)
 this.jwt.getSelectedArticleData(res.articles);

  
 // console.log(res?.articles[0])
  // this.articles=res?.articles.map((ele:any)=>{
  //   ele.author.image='./assets/blog-1.jpg'
  //   return ele;
  //  } )
  this.articles = res.articles.map((ele: any, index: number) => {
    const imageIndex = index % this.imageArray.length;
    ele.author.image = this.imageArray[imageIndex];
    return ele;
  });
  console.log(this.articles);
  
  })
 

}


yourArticles:any;
getYourArticles(limitIndex:number,offSetIndex:number){
  this.service.getYFeedArticles(limitIndex,offSetIndex).subscribe((res:any)=>{
    console.log(res);
    this.yourArticles=res.articles.map((ele: any, index: number) => {
      const imageIndex = index % this.imageArray.length;
      ele.author.image = this.imageArray[imageIndex];
      return ele;
    });
    console.log(this.yourArticles);
    
    })


}



getPagination():void {
  for(let i = 0;i<=this.count;i++) {
    i = i+9;
    this.countIncrese++;
    this.countArray = [...this.countArray,this.countIncrese]
  }
}
getSelectedCount(numberIndex:number) {
  console.log(numberIndex*10);
  let limitIndex = 10;
  let offSetIndex = numberIndex*10
  this.getGlobalArticles(limitIndex,offSetIndex)
  this.getYourArticles(limitIndex,offSetIndex)
}



renavigateToBlogs(slug:string) {
 this._routers.navigate(['account/blog'],{queryParams:{slugData:slug}})
}
tags:any;
getPopularTagsList(){
 this.service.getPopularTags().pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
   this.tags=res;
   console.log(res)
 })
}
readArticles:any={};
getReadMoreData(slug:string) {
  this.service.getReadMore(slug).pipe(takeUntil(this.onDestroy$)).subscribe((res:any)=>{
    console.log(res?.article);
    this.service = res?.article

  })
 }


 getAtricleTitleTags(){
  this.service.getArticleTags(this.articles.author.username).subscribe(res=>{
    console.log(res)
  })
}
}
