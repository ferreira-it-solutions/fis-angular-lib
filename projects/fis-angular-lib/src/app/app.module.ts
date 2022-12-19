import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FisSkeletonLoadingModule } from '@fis-lib/skeleton-loading';

import { RouterModule } from '@angular/router';
import { FisLoadingModule } from 'projects/fis-lib/loading/src/public-api';
import { FisMatAlertModule } from 'projects/fis-lib/mat-alert/src/public-api';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { routes } from './pages/pages.routing';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FisMatAlertModule.forRoot(),
    FisLoadingModule.forRoot(),
    FisSkeletonLoadingModule,
    PagesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
