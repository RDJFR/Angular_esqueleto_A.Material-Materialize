import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { PagesModule } from './pages/pages.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MaterialModule} from '../material-module';



@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegisterComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  MaterialModule,
  PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}

platformBrowserDynamic().bootstrapModule(AppModule);
