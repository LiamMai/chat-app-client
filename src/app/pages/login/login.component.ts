import { Component, OnInit } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzImageModule } from 'ng-zorro-antd/image';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, NzInputModule, NzImageModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent implements OnInit {
  constructor() {}

  showImageItem: number = 1;
  private subscriptions: Subscription[] = []

  ngOnInit(): void {
    const imagesInterval = interval(5000);
    const sub = imagesInterval.subscribe({
      next: () => {
        if (this.showImageItem === 4) {
          this.showImageItem = 1;
        } else {
          this.showImageItem++;
        }
        console.log("🚀 ~ LoginComponent ~ ngOnInit ~ this.showImageItem:", this.showImageItem)
      }
    })

    this.subscriptions.push(sub)
  }


}
