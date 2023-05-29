import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponentt implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }


}
