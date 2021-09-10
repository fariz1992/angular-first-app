import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { IgxInputGroupModule } from "igniteui-angular"; 
const routes: Routes = [
  {
    path: '',
    component: DataBindingComponent
  }
];

@NgModule({
  declarations: [DataBindingComponent],
  providers:[CookieService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IgxInputGroupModule
  ]
})
export class DataBindingModule { }
