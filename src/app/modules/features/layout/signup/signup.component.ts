import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/Http/api.service';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted:boolean=false
  err!:any;
  myForm!:FormGroup
  constructor(private service:ApiService,private fb:FormBuilder,private route:Router,
    private jwtService:JwtService){}
  ngOnInit(){
    this.myForm = this.fb.group({
      username:['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
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
        console.log(res)
        this.route.navigate(['user/signin'])
       },
       error:(error)=>{
        this.err=error?.error?.errors;
        console.log(error)

       }
      })
      this.myForm.reset();
    }

  }
}