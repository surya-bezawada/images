import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';

import { BlogdetailsComponent } from './layout/blogdetails/blogdetails.component';
import { ContentpageComponent } from './layout/contentpage/contentpage.component';
import { LayoutComponent } from './layout/layout.component';

import { SigninComponent } from './layout/signin/signin.component';
import { SignupComponent } from './layout/signup/signup.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[

    {path: '',redirectTo:'content', pathMatch:'full'},
    { path: 'content', component: ContentpageComponent },
    {path:'auth',component:AuthComponent},
    {path:'blog',component:BlogdetailsComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
