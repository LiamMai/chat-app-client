import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FriendService } from '../../../../core/services/friends/friend.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { ToastService } from '../../../../core/services/toast/toast.service';
import { injectMutation, injectQuery } from '@tanstack/angular-query-experimental';
import { QUERY_KEY } from '../../../../shared/constants';
import {
  NzSkeletonModule
} from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { UserCardComponent } from "../../../../shared/components/user-card/user-card.component";

const importModules = [
  NzCardModule,
  NzGridModule,
  NzAvatarModule,
  NzButtonModule,
  NzIconModule,
  NzSkeletonModule,
  NzSpaceModule,
  NzEmptyModule,
  UserCardComponent
]
const providers = [
  UserCardComponent
]

@Component({
  selector: 'app-suggest-friend',
  imports: importModules,
  templateUrl: './suggest-friend.component.html',
  styleUrl: './suggest-friend.component.scss',
  providers: providers
})
export class SuggestFriendComponent implements OnInit, OnDestroy {

  constructor(
    private friendService: FriendService,
    private toastService: ToastService
  ) { }

  queryPotentialFriend = injectQuery(() => ({
    queryKey: [QUERY_KEY.FRIEND.POTENTIAL_FRIEND],
    queryFn: async () => await lastValueFrom(this.friendService.getPotentialFriend()),
    throwOnError: (error) => {
      this.toastService.createToast({ type: 'error', message: error.message })
      return false;
    }
  }));

  mutationSendFriendRequest = injectMutation(() => ({
    mutationFn: (body: SendFriendRequestBody) => lastValueFrom(this.friendService.postSendFriendRequest(body))
  }))


  private subscriptions: Subscription[] = []

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  async handleSendFriendRequest(receiver: PotentialFriendItemResponse) {
    const body: SendFriendRequestBody = {
      receiverId: receiver.userId
    }

    try {
      await this.mutationSendFriendRequest.mutateAsync(body);
      this.toastService.createToast({ type: 'success', message: 'Send Friend Request Succesfully!' });
      this.queryPotentialFriend.refetch();
    } catch (error: any) {
      this.toastService.createToast({ type: 'error', message: error.message })

    }
  }


}
