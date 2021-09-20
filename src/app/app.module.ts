import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localAzLatn from '@angular/common/locales/az-Latn';
import localExtraAzLatn from '@angular/common/locales/extra/az-Latn';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserPermissionsComponent } from './user/user-permissions/user-permissions.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import {
  IgxNavbarModule,
  IgxIconModule,
  IgxButtonModule,
  IgxNavigationDrawerModule,
  IgxRippleModule,
  IgxToggleModule
} from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { SaatComponent } from 'src/libs';
import { AngularFormComponent } from './angular-form/angular-form.component';


registerLocaleData(localAzLatn, 'az-Latn', localExtraAzLatn);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    UserDetailComponent,
    UserSettingsComponent,
    UserPermissionsComponent,
    UserPostsComponent,
    SaatComponent,
    AngularFormComponent
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
    FormsModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
