import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserDetailComponent,
    RoleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 10000
    }),
    NgxSpinnerModule,
    IgxButtonModule,
    IgxRippleModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
