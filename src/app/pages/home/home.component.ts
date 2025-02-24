import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';

const importModule = [
  CommonModule,
  NzTabsModule,
  NzIconModule
]

@Component({
  selector: 'app-home',
  imports: importModule,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {}
 tabs = [
    {
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      name: 'Tab 2',
      icon: 'android'
    }
  ];
}
