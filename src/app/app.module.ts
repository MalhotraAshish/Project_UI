import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpIntercepterAuthService } from './service/http/http-intercepter-auth.service';
import { JwtAuthenticationService } from './service/authentication/jwt-authentication.service';
import { UserGroupComponent } from './users/user-group/user-group.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    UsersComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UserDetailsComponent,
    UserGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterAuthService, multi: true }
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthenticationService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
