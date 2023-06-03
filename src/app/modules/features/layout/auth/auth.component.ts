import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/Http/api.service';
import { JwtService } from 'src/app/core/Http/jwt.service';
import { UserLogIn, Users } from 'src/app/core/Model/article';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  submitted:boolean=false

  
  Form!:FormGroup
  myForm!:FormGroup
 
  constructor(private service:ApiService,private fb:FormBuilder,private route:Router,
    private jwtService:JwtService){

    this.Form= this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  

  }
  ngOnInit(){
    this.myForm = this.fb.group({
      username:['',[Validators.required]],
      email: ['',[Validators.required]],
      password:['',[Validators.required]]
     
    })
  }
   
  onSubmit() {
    if(this.myForm.valid){
      this.service.registration(this.myForm.value as {
        email: string;
        password: string;
        username: string;
      }).subscribe({
       next:(res)=>{
        console.log(res);
       },
       error:(error)=>{
        this.err=error?.error?.errors;
        console.log(error)

       }
      })
      this.myForm.reset();
   

    }

  }

  get registerFormControl() {
    return this.myForm.controls;
  }

  err:any;
  signin(){


let user:any;
let username:any;
    if(this.Form.valid){
      this.service.login(this.Form.value as {
        email: string;
        password: string;}).subscribe({
          next:(res)=>{
            console.log(res);
            user=res.user.token
            this.jwtService.storeToken({token:user})
            username=res.user.username
            this.jwtService.storeLogInStatus(username);
            this.route.navigate(['account'])

          },
          error:(error)=>{
            this.err=error?.error?.errors;

          }
      
     
           
      },
      
      )
      
      this.Form.reset();
    }
  
  }
    
}
