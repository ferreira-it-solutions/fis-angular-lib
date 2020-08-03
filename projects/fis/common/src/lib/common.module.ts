import { LoadingModule } from './modules/loading/loading.module';
import { LoadingComponent } from './modules/loading/loading.component';
import { LoadingService } from './modules/loading/loading.service';
import { NotDataComponent } from './components/not-data/not-data.component';
import { AlertModule } from './modules/alert/alert.module';
import { MaterialModuleModule } from './material.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './modules/alert/dialog/alert-dialog.component';
import { AlertService } from './modules/alert/alert.service';
import { UpperCaseDirective } from './directives/upper-case.directive';
import { SafePipe } from './pipes/safe.pipe';
import { GeneralDialogComponent } from './components';

@NgModule({
  declarations: [
    NotDataComponent,
    UpperCaseDirective,
    SafePipe,
    GeneralDialogComponent
  ],
  imports: [CommonModule, MaterialModuleModule, AlertModule, LoadingModule],
  exports: [
    AlertModule,
    NotDataComponent,
    UpperCaseDirective,
    SafePipe,
    GeneralDialogComponent
  ],
  entryComponents: [AlertDialogComponent, LoadingComponent, GeneralDialogComponent],
})
export class FisCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FisCommonModule,
      providers: [AlertService, LoadingService],
    };
  }
}
