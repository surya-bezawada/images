import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/Http/api.service';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName!:string;
  constructor(private api:ApiService,private jwt:JwtService) { }

  ngOnInit(): void {
    this.jwt.logIn$.subscribe(res=>{
      this.userName=res;
    })

  }
logoutbtn(){
  this.api.logout();
}


}
