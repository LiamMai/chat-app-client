import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Router, RouterOutlet } from '@angular/router';
import ROUTES from '../../constants/routes';
import { RouteService } from '../../core/services/route.service';

const importModule = [
  CommonModule,
  NzTabsModule,
  NzIconModule,
  RouterOutlet
]

@Component({
  selector: 'app-home',
  imports: importModule,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private routeService: RouteService
  ) {}

  selectedIndexTab = 0

  tabs = [
    {
      index: 0,
      icon: 'message',
      route: this.routeService.getRoutePath(ROUTES.HOME, ROUTES.HOME.MESSAGE)
    },
    {
      index: 1,
      icon: 'product',
      route: this.routeService.getRoutePath(ROUTES.HOME, ROUTES.HOME.FRIEND)
    }
  ];

  handleSelectTab(route: string) {
    this.router.navigate([route], { replaceUrl: true })
  }

  handleSelectIndexTab(index: number) {
    this.selectedIndexTab = index
  }


  ngOnInit(): void {
    const currentRoute = this.router.url;
    this.selectedIndexTab = this.tabs.find(item => `/${item.route}` === currentRoute)?.index ?? 0
  }
}
