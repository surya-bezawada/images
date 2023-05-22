import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Form!:FormGroup
  myForm!:FormGroup
  showLogin=false;
  constructor(private service:ApiService,private fb:FormBuilder,private route:Router,private acitvatedRoute:ActivatedRoute){

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
      this.route.navigate(['/home']);

    }

  }

  signin(){

    if(this.Form.valid){
      this.service.login(this.Form.value as {
        email: string;
        password: string;
        
      }).subscribe({
        next: () => {
            // get return url from query parameters or default to home page
            const returnUrl = this.acitvatedRoute.snapshot.queryParams['returnUrl'] || '/home';
            this.route.navigateByUrl(returnUrl);
        },
        error: error => {
          console.log(error)
        }
          
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
