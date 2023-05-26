import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const accountModule = () => import('./modules/pages/account.module').then(x => x.AccountModule);
const usersModule = () => import('./modules/features/user.module').then(x => x.UserModule);
const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},

  { path: 'account', loadChildren: () => import('./modules/pages/account.module').then(x => x.AccountModule) },
  { path: 'user', loadChildren: () =>  import('./modules/features/user.module').then(x => x.UserModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
