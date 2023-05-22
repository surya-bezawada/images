import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';



const accountModule = () => import('./modules/pages/account.module').then(x => x.AccountModule);
const routes: Routes = [
  {path:'',redirectTo:'account',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path: 'account', loadChildren: () => import('./modules/pages/account.module').then(x => x.AccountModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
