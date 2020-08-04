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
import {TokenInterceptor} from './shared/classes/token.interceptor';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';
import { InstitutionsPageComponent } from './institutions-page/institutions-page.component';
import { PicturesFormComponent } from './pictures-page/pictures-form/pictures-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginLayoutComponent,
    PeopleLayoutComponent,
    ChatLayoutComponent,
    AdminLayoutComponent,
    FriendsPageComponent,
    SearchPageComponent,
    ChatPageComponent,
    UsersPageComponent,
    PicturesPageComponent,
    InstitutionsPageComponent,
    PicturesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
