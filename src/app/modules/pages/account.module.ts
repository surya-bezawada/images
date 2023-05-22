import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule
    
  ]
})
export class AccountModule { }
