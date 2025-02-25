import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import ROUTES from './constants/routes';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FriendsComponent } from './pages/home/components/friends/friends.component';
import { MessageComponent } from './pages/home/components/message/message.component';
export const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME.INDEX, pathMatch: 'full' },
  { path: ROUTES.LOGIN, component: LoginComponent, pathMatch: 'full' },
  { path: ROUTES.SIGN_UP, component: SignUpComponent, pathMatch: 'full' },
  { 
    path: ROUTES.HOME.INDEX, 
    component: HomeComponent, 
    canActivate: [AuthGuard], 
    children: [
    {
      path: ROUTES.HOME.FRIEND,
      component: FriendsComponent
    },
     {
      path: ROUTES.HOME.MESSAGE,
      component: MessageComponent
    },
  ] 
},
  { path: '**', component: NotFoundComponent },
];
