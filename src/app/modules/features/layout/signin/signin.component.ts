import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/Http/api.service';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  Form!: FormGroup
  errorMessage!:string;
  constructor(private service:ApiService,private fb:FormBuilder,private route:Router,
    private jwtService:JwtService){

    this.Form= this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  

  }

  ngOnInit(): void {
  }

  signin() {
    let user: any;
    let username: any;
    if (this.Form.valid) {
      this.service.login(this.Form.value as {
        email: string;
        password: string;
      }).subscribe({
        next: (res) => {
          console.log(res);
          user = res.user.token
          this.jwtService.storeToken({ token: user })
          username = res.user.username
          this.jwtService.storeLogInStatus(username);
          this.route.navigate(['account'])
        },
        error: (error) => {
          this.errorMessage = error?.error?.errors;

        }

      },

      )

      this.Form.reset();
    }

  }
}
