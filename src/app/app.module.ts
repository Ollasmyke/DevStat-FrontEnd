import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent} from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SelectorComponent } from './layouts/selector/selector.component';
import { SelectLangComponent } from './layouts/select-lang/select-lang.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    NavBarComponent,
    SelectorComponent,
    SelectLangComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
