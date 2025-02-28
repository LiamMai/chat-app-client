import { Component } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { QUERY_KEY } from '../../../../shared/constants';
import { lastValueFrom } from 'rxjs';
import { FriendService } from '../../../../core/services/friends/friend.service';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { HttpParamsService } from '../../../../core/services/http/http-params.service';
import { HttpParams } from '@angular/common/http';
import { UserCardComponent } from '../../../../shared/components/user-card/user-card.component';
import { STATUS_FRIEND_REQUEST } from '../../../../shared/constants/enum';


const importModules = [
  NzEmptyModule,
  NzIconModule,
  UserCardComponent
]

const providers = [
  HttpParamsService,
  UserCardComponent
]

@Component({
  selector: 'app-friend-request',
  imports: importModules,
  templateUrl: './friend-request.component.html',
  styleUrl: './friend-request.component.scss',
  providers
})
export class FriendRequestComponent {

  constructor(
    private friendService: FriendService,
    private toastService: ToastService,
    private httpParamsService: HttpParamsService
  ) { }

  private params = this.httpParamsService
    .append('page', 1)
    .append('perPage', 10)
    .build()

  querySendFriendRequest = injectQuery(() => ({
    queryKey: [QUERY_KEY.FRIEND.SEND_FRIEND_REQUEST, JSON.stringify(this.params.toString())],
    queryFn: () => lastValueFrom(this.friendService.geSendFriendRequest(this.params)),
    throwOnError: (error) => {
      this.toastService.createToast({ type: 'error', message: error.message })
      return false;
    }
  }));

  convertUserFromFriendRequest(friendRequest: FriendRequestResponse[] | undefined) {
    const mapUser = friendRequest?.map(item => ({ ...item.user, status: item.status as STATUS_FRIEND_REQUEST }));
    return mapUser;
  }

}
