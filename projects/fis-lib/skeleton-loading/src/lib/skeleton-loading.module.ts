import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FisSkeletonLoadingComponent } from './skeleton-loading.component';

@NgModule({
  declarations: [FisSkeletonLoadingComponent],
  imports: [CommonModule],
  exports: [FisSkeletonLoadingComponent],
})
export class FisSkeletonLoadingModule {}
