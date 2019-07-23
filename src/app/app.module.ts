import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatFormField, MatFormFieldModule, MatSelectModule, MatFormFieldControl, MatInputModule, MatCard, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './services/socket.service';
import { AuthenticationComponent } from './components/setup/authentication/authentication.component';
import { SigninComponent } from './components/setup/authentication/signin/signin.component';
import { ApiService } from './services/api.service';
import { NotauthguardGuard } from './guards/notauthguard.guard';
import { AuthguardGuard } from './guards/authguard.guard';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/mainUI/home/home.component';
import { HomeTabsComponent } from './components/mainUI/home/home-tabs/home-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChatComponent } from './components/mainUI/home/home-tabs/chat/chat.component';
import { MatListModule } from '@angular/material/list';
import { ExploreComponent } from './components/mainUI/home/home-tabs/explore/explore.component';
import { ChatWindowComponent } from './components/mainUI/chat-window/chat-window.component';
import { MatRippleModule, MatOptionModule } from '@angular/material/core';
import { GetUsersResolver } from './components/mainUI/home/home-tabs/chat/resolve/get-users.resolver';
import { SubjectService } from './services/subjects.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SigninComponent,
    HomeComponent,
    HomeTabsComponent,
    ChatComponent,
    ExploreComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    SocketService,
    ApiService,
    NotauthguardGuard,
    AuthguardGuard,
    GetUsersResolver,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
