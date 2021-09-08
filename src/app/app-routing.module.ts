import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'aboutus',
    component: AboutusComponent
  }, {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }, {
    path: '**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
