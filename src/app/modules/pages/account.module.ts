import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AccountRoutingModule } from './account-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ArticlesComponent } from './layout/articles/articles.component';
import { ContentpageComponent } from './layout/contentpage/contentpage.component';
import { BloglistComponent } from './layout/bloglist/bloglist.component';
import { SettingsComponent } from './layout/settings/settings.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    ContentpageComponent,
    BloglistComponent,
    SettingsComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule
    
  ]
})
export class AccountModule { }
