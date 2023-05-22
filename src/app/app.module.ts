import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/Layout/header/header.component';
import { FooterComponent } from './core/Layout/Footer/footer.component';

import { LoginComponent } from './core/Auth/Login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/components/home/home.component';
import { ContentPageComponent } from './modules/components/content-page/content-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContentPageComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
