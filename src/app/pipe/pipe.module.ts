import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const router: Routes = [
  {
    path: '',
    component: PipeComponent,
  }
];


@NgModule({
  declarations: [PipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(router)
  ]
})
export class PipeModule { }
