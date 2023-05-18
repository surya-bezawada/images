import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private api:ApiService){

    }
img1:string='';
img2:string=''
imageArray:string[]=[]
    ngOnInit(){
        this.getArticlesList()
       this.img1='./assets/blog-1.jpg'
       this.img2='./assets/blog-2.jpg'
       this.imageArray=[this.img1, this.img2]
    }


    articleslist:any[]=[];
    getArticlesList(){
        this.api.getArticles(200,0).subscribe(res=>{
            console.log(res.articles)
            this.articleslist=res.articles
            this.articleslist.map(ele=>{
                this.imageArray.map((obj, index)=>{
                    ele.author.image=obj
                })
            })
        })
        
    }
    
}
