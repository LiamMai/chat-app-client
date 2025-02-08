import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ],
  providers: [
    NbSidebarService
  ]
})
export class NotFoundComponent {}
