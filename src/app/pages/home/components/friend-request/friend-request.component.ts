import { Component } from '@angular/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';


const importModules = [
  NzEmptyModule,
  NzIconModule
]

@Component({
  selector: 'app-friend-request',
  imports: importModules,
  templateUrl: './friend-request.component.html',
  styleUrl: './friend-request.component.scss'
})
export class FriendRequestComponent {

}
