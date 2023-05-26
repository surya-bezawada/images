import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
logoutbtn(){
  this.api.logout();
}


}
