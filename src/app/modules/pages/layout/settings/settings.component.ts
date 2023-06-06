import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/core/Http/api.service';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { ArticlesComponent } from '../articles/articles.component';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/core/Http/jwt.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  onDestroy$ = new Subject<boolean>()
myForm!:FormGroup;
  constructor(private api:ApiService,private fb:FormBuilder,private route:Router,private jwt:JwtService) { }
  selectedProfile:any;
  ngOnInit() {
    this.myForm = this.fb.group({
      bio:['',[Validators.required]],
      email: ['',[Validators.required]],
      image:['',[Validators.required]],
      password:['',[Validators.required]],
      username:['',[Validators.required]],
     
    })
    this.jwt.token$.subscribe((res:any) => {
      this.patchData(res?.token)
   
    
  })

  

  }
  err:any;
  updateSettings(){
    if(this.myForm.valid){
      this.api.update(this.myForm.value).pipe(takeUntil(this.onDestroy$)).subscribe({
        next:(res)=>{
          console.log(res)
          this.jwt.getProfile(res)
          this.route.navigate(['account/profile'])
         },
         error:(error)=>{
          this.err=error?.error?.errors;
          console.log(error)
  
         }
      })
      this.myForm.reset();
    }
  }

  patchData(data:any){
    console.log(data);
    this.myForm.patchValue({
      image:data?.image,
      username:data?.username,
      bio:data?.bio,
      email:data?.email
    })

  }

}
