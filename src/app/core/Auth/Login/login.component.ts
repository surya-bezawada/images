import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Http/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Form!:FormGroup
  myForm!:FormGroup
  showLogin=false;
  constructor(private service:ApiService,private fb:FormBuilder,private route:Router){

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
      }).subscribe(res=>{
        console.log(res);
      })
      this.myForm.reset();
     // this.route.navigate(['/home']);

    }

  }

  signin(){

    if(this.Form.valid){
      this.service.login(this.Form.value as {
        email: string;
        password: string;
        
      }).subscribe(res=>{
       console.log(res)
      })
      this.Form.reset();
    }
  }
    

  openLogin(){
    this.showLogin=false
  }
  openSignUp(){
    this.showLogin=true
  }

}
