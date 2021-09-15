import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from 'src/libs';//src/libs/index

const router: Routes = [
  {
    path: '',
    component: DirectiveComponent,
  }
];


@NgModule({
  declarations: [DirectiveComponent, HighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(router)
  ]
})
export class DirectiveModule { }
