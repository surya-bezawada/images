import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private route:Router,private api:ApiService) {
    if(this.api.userValue){
      this.route.navigate(['/home']);
    }
   }

  ngOnInit(): void {
  }

}
