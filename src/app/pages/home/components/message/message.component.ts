import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, NgZone, ViewChild } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { filter, map, pairwise, throttleTime } from 'rxjs';

const importModules = [
  CommonModule,
  NzMenuModule,
  ScrollingModule
]

@Component({
  selector: 'app-message',
  standalone: true,
  imports: importModules,
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  constructor(
    private ngZone: NgZone
  ) { }
  fetchedRanges = new Set<number>();
  name = 'CDK Virtual Scroll Infinite Loop';

  arr = Array.from({ length: 50 }).map((_, i) => `${i}`);

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport


  ngAfterViewInit(): void {

    this.viewPort.elementScrolled().pipe(
      map(() => this.viewPort.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200)
    ).subscribe(() => {
      this.ngZone.run(() => {
        console.log("Fire")
      });
    }
    );
  }


}
