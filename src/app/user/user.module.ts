import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
const routes: Routes = [
  {
    path: ':id',
    component:UserComponent,
    children: [
      {
        path: 'detail',
        component:UserDetailComponent
      },
      {
        path: 'settings',
        component:UserSettingsComponent
      },
      {
        path: 'permission',
        component:UserPermissionsComponent
      },
      {
        path: 'posts',
        component:UserPostsComponent
      },
      {
        path: '**',
        component:UserDetailComponent
      },
      {
        path: '',
        pathMatch:'full',
        component:UserDetailComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
