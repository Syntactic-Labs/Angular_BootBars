import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bar1Component } from './navbars/topbars/bar1/bar1.component';
import { Bar2Component } from './navbars/topbars/bar2/bar2.component';
import { MainNavbarComponent } from './navbars/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Bar1Component,
    Bar2Component,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
