import { Component, OnInit } from '@angular/core';
import { GArticlesService } from 'src/app/core/Http/g-articles.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(private service: GArticlesService) { }
  imageArray:String[]=[]
  ngOnInit(): void {
    this.getGlobalArticles();
    let img1='./assets/blog-1.jpg'
    let img2='./assets/blog-2.jpg'
    let img3='./assets/blog-3.jpg'
    let img4='./assets/blog-4.jpg'
    this.imageArray=[
img1, img2, img3, img4
    ]
  }

  articles:any;
getGlobalArticles(){
  this.service.getArticles(10,0).subscribe((res:any)=>{
   // console.log(res);
   // this.articles=res?.articles
  
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

}
