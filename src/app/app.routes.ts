import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import ROUTES from './shared/constants/routes';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { FriendsComponent } from './pages/home/components/friends/friends.component';
import { MessageComponent } from './pages/home/components/message/message.component';
import { FriendRequestComponent } from './pages/home/components/friend-request/friend-request.component';
import { SuggestFriendComponent } from './pages/home/components/suggest-friend/suggest-friend.component';
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
        component: FriendsComponent,
        canActivate: [AuthGuard],

      },
      {
        path: ROUTES.HOME.MESSAGE,
        component: MessageComponent,
        canActivate: [AuthGuard],

      },
      {
        path: ROUTES.HOME.FRIEND_REQUEST,
        component: FriendRequestComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ROUTES.HOME.SUGGEST_FRIEND,
        component: SuggestFriendComponent,
        canActivate: [AuthGuard],

      },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
