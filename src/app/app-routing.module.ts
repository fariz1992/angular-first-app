import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserPermissionsComponent } from './user/user-permissions/user-permissions.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
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
    component: UserComponent
  }, {
    path: 'user/:id/detail',
    component: UserDetailComponent
  }, {
    path: 'user/:id/permission',
    component: UserPermissionsComponent
  }
  , {
    path: 'user/:id/posts',
    component: UserPostsComponent
  }, {
    path: 'user/:id/settings',
    component: UserSettingsComponent
  }, {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
