import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private nzMessage: NzMessageService) { }

  createToast({  message, type }: {  type: 'success' | 'error' | 'warning', message: string }): void {
    this.nzMessage.create(type, message);
  }

}
