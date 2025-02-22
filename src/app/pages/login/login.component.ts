import { Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const importsModule = [
  CommonModule,
  NzInputModule,
  NzImageModule,
  NzIconModule,
  FormsModule,
  NzButtonModule,
  NzDividerModule
]

@Component({
  selector: 'app-login',
  imports: importsModule,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  showImageItem: number = 1;
  passwordVisible = false;
  password: string = "";

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    const imagesInterval = interval(5000);
    const sub = imagesInterval.subscribe({
      next: () => {
        if (this.showImageItem === 4) {
          this.showImageItem = 1;
        } else {
          this.showImageItem++;
        }
      }
    })

    this.subscriptions.push(sub)
  }


}
