import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import ROUTES from './constants/routes';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
export const routes: Routes = [
  { path: ROUTES.LOGIN, component: LoginComponent },
  { path: ROUTES.SIGN_UP, component: SignUpComponent },
  { path: '**', component: NotFoundComponent },
];
