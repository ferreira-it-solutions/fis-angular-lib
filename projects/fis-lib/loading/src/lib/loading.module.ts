import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoadingComponent } from './component/loading.component';
import { FisLoadingConfig, FIS_LOADING_CONFIG } from './loading.config';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent],
})
export class FisLoadingModule {
  static forRoot(config: FisLoadingConfig = FIS_LOADING_CONFIG): ModuleWithProviders<FisLoadingModule> {
    return {
      ngModule: FisLoadingModule,
      providers: [
        {
          provide: 'FisLoadingConfig',
          useValue: config ?? FIS_LOADING_CONFIG,
        }
      ],
    };
  }
}
