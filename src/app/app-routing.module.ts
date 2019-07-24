import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/setup/authentication/authentication.component';
import { NotauthguardGuard } from './guards/notauthguard.guard';
import { SigninComponent } from './components/setup/authentication/signin/signin.component';
import { HomeComponent } from './components/mainUI/home/home.component';
import { ChatComponent } from './components/mainUI/home/home-tabs/chat/chat.component';
import { ExploreComponent } from './components/mainUI/home/home-tabs/explore/explore.component';
import { ChatWindowComponent } from './components/mainUI/chat-window/chat-window.component';
import { HomeTabsComponent } from './components/mainUI/home/home-tabs/home-tabs.component';
import { GetUsersResolver } from './components/mainUI/home/home-tabs/chat/resolve/get-users.resolver';
import { AuthguardGuard } from './guards/authguard.guard';
import { GetUserInfoResolver } from './components/mainUI/chat-window/resolve/get-user-info.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: 'authentication', pathMatch: 'full',
  },
  {
    path: 'authentication', component: AuthenticationComponent, canActivate: [NotauthguardGuard],
    children: [{
      path: '', redirectTo: 'login', pathMatch: 'full'
    }, {
      path: 'login', component: SigninComponent
    }]
  },
  {
    path: 'home', component: HomeComponent, canActivate:[AuthguardGuard], children: [
      {
        path: '', component: HomeTabsComponent, children: [{
          path: '', redirectTo: 'chat', pathMatch: 'full',
        }, {
          path: 'chat', component: ChatComponent, resolve: {
            users: GetUsersResolver
          }
        }, {
          path: 'explore', component: ExploreComponent
        }]
      },
      {
        path: 'cw/:chatterId', component: ChatWindowComponent, resolve: {
          userInfo: GetUserInfoResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
