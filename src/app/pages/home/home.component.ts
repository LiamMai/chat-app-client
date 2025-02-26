import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const importModule = [
  CommonModule,
  RouterLink,
  NzIconModule,
  NzMenuModule,
  RouterOutlet
]

@Component({
  selector: 'app-home',
  imports: importModule,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
}
