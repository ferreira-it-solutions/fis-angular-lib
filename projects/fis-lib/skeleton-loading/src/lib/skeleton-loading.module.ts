import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonLoadingComponent } from './skeleton-loading.component';

@NgModule({
  declarations: [SkeletonLoadingComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [SkeletonLoadingComponent],
})
export class SkeletonLoadingModule {}
