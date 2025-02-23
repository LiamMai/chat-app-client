import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStatusService {

  constructor() { }


  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  startLoading(): void {
    this.isLoadingSubject.next(true);
  }

  stopLoading(): void {
    this.isLoadingSubject.next(false);
  }

  track<T>(observable: Observable<T>): Observable<T> {
    this.startLoading();
    return observable.pipe(finalize(() => this.stopLoading()));
  }
}
