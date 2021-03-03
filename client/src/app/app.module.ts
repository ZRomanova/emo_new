import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {SocketioService} from './shared/services/socketio.service'
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
import { UsersFormComponent } from './users-page/users-form/users-form.component';
import { InstitutionsFormComponent } from './institutions-page/institutions-form/institutions-form.component';
import { InstitutionsDeleteComponent } from './institutions-page/institutions-delete/institutions-delete.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { DeletePictureComponent } from './shared/components/delete-picture/delete-picture.component';
import { DeleteOneMessageComponent } from './shared/components/delete-one-message/delete-one-message.component';
import { DeleteAllMessageComponent } from './shared/components/delete-all-message/delete-all-message.component';
import { PictureZoomComponent } from './shared/components/picture-zoom/picture-zoom.component';
import { RecordAudioComponent } from './shared/components/record-audio/record-audio.component';
import { EasyLangDirective } from './shared/directive/easy-lang.directive';
import { AnswersComponent } from './shared/components/answers/answers.component';
import { RefDirective } from './shared/directive/ref.directive';
import { EventsPageComponent } from './events-page/events-page.component';
import { EmoBotPageComponent } from './emo-bot-page/emo-bot-page.component';
import { BotLayoutComponent } from './shared/layouts/bot-layout/bot-layout.component';
import { AdminBotPageComponent } from './admin-bot-page/admin-bot-page.component';
import { AdminEventsPageComponent } from './admin-events-page/admin-events-page.component';
import { AdminBotFormComponent } from './admin-bot-page/admin-bot-form/admin-bot-form.component';
import { AdminEventsFormComponent } from './admin-events-page/admin-events-form/admin-events-form.component';
import { GroupLayoutComponent } from './shared/layouts/group-layout/group-layout.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { PicturesStartComponent } from './pictures-page/pictures-start/pictures-start.component';

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
    UsersFormComponent,
    InstitutionsFormComponent,
    InstitutionsDeleteComponent,
    SettingsPageComponent,
    FilterPipe,
    DeletePictureComponent,
    DeleteOneMessageComponent,
    DeleteAllMessageComponent,
    PictureZoomComponent,
    RecordAudioComponent,
    EasyLangDirective,
    AnswersComponent,
    RefDirective,
    EventsPageComponent,
    EmoBotPageComponent,
    BotLayoutComponent,
    AdminBotPageComponent,
    AdminEventsPageComponent,
    AdminBotFormComponent,
    AdminEventsFormComponent,
    GroupLayoutComponent,
    GroupPageComponent,
    PicturesStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    },
    SocketioService
  ],
  entryComponents: [AnswersComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
