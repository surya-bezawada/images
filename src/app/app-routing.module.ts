import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/Auth/Login/login.component';
import { AuthComponent } from './core/Auth/signUp/Auth.component';
import { HomeComponent } from './Features/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'signup',component:AuthComponent},
  {path:'signIn',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
