import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [
     RouterModule
  ]
})

export class AppRoutingModule { }
