import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import { PeopleLayoutComponent } from './shared/layouts/people-layout/people-layout.component';
import { ChatLayoutComponent } from './shared/layouts/chat-layout/chat-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginLayoutComponent,
    PeopleLayoutComponent,
    ChatLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
