import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FisMatAlertModule } from '@fis-lib/mat-alert';
import { SkeletonLoadingModule } from '@fis-lib/skeleton-loading';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { routes } from './pages/pages.routing';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FisMatAlertModule.forRoot(),
    SkeletonLoadingModule,
    PagesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
