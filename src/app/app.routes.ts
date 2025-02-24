import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import ROUTES from './constants/routes';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: ROUTES.HOME, pathMatch: 'full' },
  { path: ROUTES.LOGIN, component: LoginComponent, pathMatch: 'full' },
  { path: ROUTES.SIGN_UP, component: SignUpComponent, pathMatch: 'full' },
  { path: ROUTES.HOME, component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];
