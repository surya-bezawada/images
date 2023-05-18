import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Auth',
  templateUrl: './Auth.component.html',
  styleUrls: ['./Auth.component.css']
})
export class AuthComponent {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder){
   

  }
ngOnInit(){
  this.myForm = this.fb.group({
    userName: new FormControl(),
    email: new FormControl(),
    password:new FormControl()
   
  })
}
 
 
onSubmit(form: FormGroup) {
 console.log(form.value)
}
}
