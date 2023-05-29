import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from 'src/app/core/Http/articles.service';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
myForm!:FormGroup;
  constructor(private setting:ArticlesService,private fb:FormBuilder) { }

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
      this.setting.PutSettings(this.myForm.value as {
        bio:string;
        email: string;
        image:string
        password: string;
        username: string;
      }).subscribe(res=>{
        //console.log(res);
      })
      this.myForm.reset();
     // this.route.navigate(['/home']);

    }
      
   
    
    
  }

}
