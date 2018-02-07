import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent} from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SelectorComponent } from './layouts/selector/selector.component';
import { SelectLangComponent } from './layouts/select-lang/select-lang.component';
import { MaterialModule } from './modules/material/material.module';
import { NewLanguageService } from './services/new-language.service';



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
    BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [NewLanguageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
