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
      }).subscribe(res=>{
        console.log(res);
      })
      this.myForm.reset();
     // this.route.navigate(['/home']);

    }

  }

  get registerFormControl() {
    return this.myForm.controls;
  }

  signin(){

//     let obj =new UserLogIn();
//   obj.email=this.Form.get('userName')?.value;
//   obj.password=this.Form.get('passWord')?.value;
//   // let user=new Users();
//   // user.user= obj;
//   this.service.login(obj).subscribe(res=>{
// console.log(res)
// if(res){
//   this.jwtService.storeToken({token:res.user?.token})    
// }
// this.Form.reset();
// //     this.route.navigate(['account'])
//   })
let user:any;
    if(this.Form.valid){
      this.service.login(this.Form.value as {
        email: string;
        password: string;}).subscribe(res=>{
       console.log(res);
       user=res.user.token
       this.jwtService.storeToken({token:user})
      //  if(res.user.token)
           
      })
    
     
      this.route.navigate(['account'])
      this.Form.reset();
    }
  
  }
    
}
