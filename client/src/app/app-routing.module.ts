import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout/login-layout.component';
import {AuthGuard} from './shared/classes/auth.guard'
import { PeopleLayoutComponent } from './shared/layouts/people-layout/people-layout.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ChatLayoutComponent } from './shared/layouts/chat-layout/chat-layout.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';
import { InstitutionsPageComponent } from './institutions-page/institutions-page.component';

const routes: Routes = [
  {
    path: '', component: LoginLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent}
    ]
  },
  {
    path: '', component: PeopleLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'people', redirectTo: '/people/friends', pathMatch: 'full'},
      {path: 'people/friends', component: FriendsPageComponent},
      {path: 'people/search', component: SearchPageComponent}
    ]
  },
  {
    path: '', component: ChatLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'chat', component: ChatPageComponent}
    ]
  },
  {
    path: '', component: AdminLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'manage', redirectTo: '/manage/users', pathMatch: 'full'},
      {path: 'manage/users', component: UsersPageComponent},
      {path: 'manage/pictures', redirectTo: '/manage/pictures/5f12ff8cc06cd105437d84e3', pathMatch: 'full'},
      {path: 'manage/pictures/:_id', component: PicturesPageComponent},
      {path: 'manage/institutions', component: InstitutionsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
