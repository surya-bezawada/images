import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { ProfileService } from 'src/app/core/Http/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedProfile:any;

  constructor(private jwt:JwtService,private profile:ProfileService) { }

  ngOnInit(): void {
    this.jwt.profile$.subscribe(res=>{
      this.selectedProfile=res;
      console.log(this.selectedProfile)
      this.getMyPostList();

    })
  }

  getMyPostList(){
    this.profile.getMyPost(this.selectedProfile.user.username,10,0).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
