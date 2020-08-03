import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingComponent } from './loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private spinnerTopRef: OverlayRef;

  private spin$: Subject<boolean> = new Subject();

  constructor(private overlay: Overlay) {
    this.spinnerTopRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    this.spin$
      .asObservable()
      .subscribe(res => {
        if (res && !this.spinnerTopRef.hasAttached()) {
          this.spinnerTopRef.attach(new ComponentPortal(LoadingComponent));
        } else if (this.spinnerTopRef.hasAttached()) {
          this.spinnerTopRef.detach();
        }
      });
  }
  show() {
    this.spin$.next(true);
  }
  hide() {
    this.spin$.next(false);
  }
}