import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FriendService } from '../../../../core/services/friends/friend.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../../../../core/services/toast.service';

const importModules = [
  NzCardModule,
  NzGridModule,
  NzAvatarModule,
  NzButtonModule,
  NzIconModule
]

@Component({
  selector: 'app-suggest-friend',
  imports: importModules,
  templateUrl: './suggest-friend.component.html',
  styleUrl: './suggest-friend.component.scss'
})
export class SuggestFriendComponent implements OnInit, OnDestroy {

  constructor(
    private friendService: FriendService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.getPotentialFriend();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  potentialFriend: PotentialFriendItemResponse[] = [];
  private subscriptions: Subscription[] = []

  getPotentialFriend() {
    const sub = this.friendService.getPotentialFriend().subscribe({
      next: (res) => {
        this.potentialFriend = res;
      },
      error: (error) => {
        this.toastService.createToast({ type: 'error', message: error.message })

      }
    })

    this.subscriptions.push(sub)
  }



}
