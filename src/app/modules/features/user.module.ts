import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './layout/auth/auth.component';
import { ContentpageComponent } from './layout/contentpage/contentpage.component';
import { BlogdetailsComponent } from './layout/blogdetails/blogdetails.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponentt } from './layout/navbar/navbar.component';
import { NavfooterComponent } from './layout/navfooter/navfooter.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
 NavbarComponentt,
 NavfooterComponent,
   AuthComponent,
   ContentpageComponent,
   BlogdetailsComponent,
   LayoutComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ]
})
export class UserModule { }
