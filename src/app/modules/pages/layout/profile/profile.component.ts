import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { ProfileService } from 'src/app/core/Http/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedProfile: any;

  constructor(private jwt: JwtService, private profile: ProfileService,private route:Router) { }

  ngOnInit(): void {
    this.jwt.token$.subscribe(res => {
      this.selectedProfile = res;
      // console.log(res.token);
      // console.log(this.selectedProfile)
      console.log(res?.token?.username)
      this.getMyPostList(res?.token?.username);
      this.getMyFavoriteList(res?.token?.username)
      this.getProfiles(res?.token?.username)

      // this.getMyFavoriteList();

    })
  }

  limitIndex: number = 10;
  offSetIndex: number = 0;
  myPost:any=[]
  getMyPostList(userName: string) {

    this.profile.getMyPost(userName, this.limitIndex, this.offSetIndex).subscribe({
      next: (res:any) => {
      this.myPost=res.articles
      console.log(this.myPost)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  myFavoritePost:any=[];
  getMyFavoriteList(userName: string) {

    this.profile.getFavoritPost(userName, this.limitIndex, this.offSetIndex).subscribe({
      next: (res:any) => {
        this.myFavoritePost=res.articles;
        console.log(this.myFavoritePost)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  myProfile:any;
  getProfiles(userName:string){
    this.profile.profilePageAction(userName).subscribe({
      next:(res:any)=>{
        console.log(res);
      this.myProfile=res;

      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  updateProfile(data:any){
    const queryParams = {
      isNewArticle: true,
      slug:data?.slug
    };

    this.route.navigate(["account/settings"], { queryParams });
  }


 }




