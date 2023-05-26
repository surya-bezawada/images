import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from "./layout/articles/articles.component";
import { BloglistComponent } from "./layout/bloglist/bloglist.component";
import { ContentpageComponent } from "./layout/contentpage/contentpage.component";
import { LayoutComponent } from "./layout/layout.component";
import { SettingsComponent } from "./layout/settings/settings.component";





const routes: Routes = [


  {path: '',component:LayoutComponent,
  children: [
    {path: '',redirectTo:'content', pathMatch:'full'},
      { path: 'content', component: ContentpageComponent },
      {path:'article',component:ArticlesComponent},
      {path:'blog',component:BloglistComponent},
      {path:'settings',component:SettingsComponent}
  ]
  },
 
  
  
 
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule { }