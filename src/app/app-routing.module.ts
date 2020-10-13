import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserGroupComponent } from './users/user-group/user-group.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"login", component: LoginComponent},
  {path:"welcome", component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:"users", component: UsersComponent, canActivate:[RouteGuardService]},
  {path:"logout", component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:"user/:id", component: UserDetailsComponent, canActivate:[RouteGuardService]},
  {path:"group", component: UserGroupComponent, canActivate:[RouteGuardService]},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
