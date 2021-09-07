import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { RoleComponent } from 'src/app/role/role.component';

const router: Routes = [{
  path: '',
  component: UserComponent
},
{
  path: ':id',
  children: [
    {
      path: 'detail',
      component: RoleComponent
    },
    {
      path:'**',
      redirectTo: 'detail',
      pathMatch:'full'
    }
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class UserModule { }
