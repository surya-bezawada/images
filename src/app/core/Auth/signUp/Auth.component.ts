import { Component } from '@angular/core';

@Component({
  selector: 'app-Auth',
  templateUrl: './Auth.component.html',
  styleUrls: ['./Auth.component.css']
})
export class AuthComponent {
    showLogin=false;
    openLogin(){
        this.showLogin=true
      }
      openSignUp(){
        this.showLogin=false
      }
}
