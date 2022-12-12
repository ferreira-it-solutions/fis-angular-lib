import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FisMatAlertModule } from '@fis-lib/mat-alert';
import { SkeletonLoadingModule } from '@fis-lib/skeleton-loading';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, SkeletonLoadingModule, FisMatAlertModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
