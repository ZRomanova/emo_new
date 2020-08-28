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
import { LoaderComponent } from './shared/components/loader/loader.component';
import { EasyLangPipe } from './shared/pipes/easy-lang.pipe';
import { UsersFormComponent } from './users-page/users-form/users-form.component';
import { InstitutionsFormComponent } from './institutions-page/institutions-form/institutions-form.component';
import { InstitutionsDeleteComponent } from './institutions-page/institutions-delete/institutions-delete.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { DeletePictureComponent } from './shared/components/delete-picture/delete-picture.component';

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
    PicturesFormComponent,
    LoaderComponent,
    EasyLangPipe,
    UsersFormComponent,
    InstitutionsFormComponent,
    InstitutionsDeleteComponent,
    SettingsPageComponent,
    FilterPipe,
    DeletePictureComponent
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
