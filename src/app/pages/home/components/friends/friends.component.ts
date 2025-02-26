import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const importModules = [
  CommonModule,

]

@Component({
  selector: 'app-friends',
  imports: importModules,
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.scss'
})
export class FriendsComponent {

  constructor() {

  }


}
