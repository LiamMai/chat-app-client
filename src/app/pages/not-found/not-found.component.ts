import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [],
  providers: [],
})
export class NotFoundComponent {
  constructor(
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this._renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(this.document.body, 'overflow');
  }
}
