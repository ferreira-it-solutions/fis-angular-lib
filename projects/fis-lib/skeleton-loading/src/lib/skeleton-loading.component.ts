import { Component, Input } from '@angular/core';

@Component({
  selector: 'fis-skeleton-loading',
  template: `
    <ng-content *ngIf="showContent"></ng-content>

    <span [ngSwitch]="repeatElements === 1">
      <div
        class="skeleton"
        *ngSwitchCase="true"
        [ngClass]="classesList"
        [class.animation]="!showContent"
      ></div>
      <div *ngSwitchDefault [ngClass]="parentClassesList">
        <div
          class="skeleton"
          *ngFor="let item of arrayFromRepeat"
          [ngClass]="classesList"
          [class.animation]="!showContent"
        ></div>
      </div>
    </span>
  `,
  styles: [
    `
      .animation {
        animation: skeleton-loading 1s linear infinite alternate;
      }

      @keyframes skeleton-loading {
        0% {
          background-color: hsl(273, 20%, 70%);
        }

        100% {
          background-color: hsl(200, 20%, 95%);
        }
      }
    `,
  ]
})
export class SkeletonLoadingComponent {
  @Input() classes: string = '';
  @Input() parentClasses: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() showContent = false;
  @Input() repeatElements = 1;

  styles() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  get classesList() {
    return this.showContent ? '' : this.classes;
  }

  get arrayFromRepeat() {
    return Array(this.repeatElements).map((x, i) => i);
  }

  get parentClassesList() {
    return this.showContent ? '' : this.parentClasses;
  }
}
