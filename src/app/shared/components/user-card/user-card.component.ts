import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { STATUS_FRIEND_REQUEST } from '../../constants/enum';


const importModules = [
  CommonModule,
  NzCardModule,
  NzGridModule,
  NzAvatarModule,
  NzButtonModule,
  NzIconModule,
  NzSkeletonModule,
  NzSpaceModule,
  NzEmptyModule,
  NzBadgeModule,
  NgTemplateOutlet,
]

@Component({
  selector: 'app-user-card',
  imports: importModules,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  constructor() { }

  @Input({ required: true }) data: UserDataUserCard[] | undefined = [];
  @Input({ required: true }) isLoading: boolean = false;
  @Input({ required: true }) type!: TypeUserCardComponent

  @Input() suggestFriend: { isSendRequestLoading: boolean } = { isSendRequestLoading: false }
  @Input() friendRequest: { isDeniedRequestLoading: boolean, isAcceptRequestLoading: boolean } = { isAcceptRequestLoading: false, isDeniedRequestLoading: false }


  @Output() onSelectFriendRequest: EventEmitter<EmitEventSelectType> = new EventEmitter();


  selectedFriendRequest = '';

  ngOnInit() {
  }

  handleSelectFriendRequest(user: UserResponse, type: SelectFriendRequest) {
    this.selectedFriendRequest = user.userId

    this.onSelectFriendRequest.emit({ user, type })
  }

  handleFormatFriendRequestStatus(user: UserDataUserCard) {
    const status: STATUS_FRIEND_REQUEST | undefined = user.status;

    if (!status)
      return ''

    const formatStatus: Record<STATUS_FRIEND_REQUEST, string> = {
      [STATUS_FRIEND_REQUEST.REQUESTED]: 'Requested',
      [STATUS_FRIEND_REQUEST.ACCEPTED]: 'Accepted',
      [STATUS_FRIEND_REQUEST.DENIED]: 'Denied'
    }
    return formatStatus[status];
  }
}
