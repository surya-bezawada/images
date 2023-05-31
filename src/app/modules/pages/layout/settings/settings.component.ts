import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/core/Http/api.service';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  onDestroy$ = new Subject<boolean>()
myForm!:FormGroup;
  constructor(private api:ApiService,private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      bio:['',[Validators.required]],
      email: ['',[Validators.required]],
      image:['',[Validators.required]],
      password:['',[Validators.required]],
      username:['',[Validators.required]],
     
    })

  }

  updateSettings(){

    if(this.myForm.valid){
      this.api.update(this.myForm.value).pipe(takeUntil(this.onDestroy$)).subscribe(res=>{
        console.log(res);
      })
      this.myForm.reset();
     // this.route.navigate(['/home']);

    }
      
   
    
    
  }

}
