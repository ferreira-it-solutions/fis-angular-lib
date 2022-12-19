import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FisLoadingConfig } from './loading.config';

@Injectable({
  providedIn: 'root',
})
export class FisLoadingService {
  isLoading = new BehaviorSubject<boolean>(false);

  constructor(@Inject('FisLoadingConfig') private config: FisLoadingConfig) {}

  get configuration() {
    return this.config;
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  toggle() {
    this.isLoading.next(!this.isLoading.value);
  }

  get isLoading$() {
    return this.isLoading.asObservable();
  }

}
