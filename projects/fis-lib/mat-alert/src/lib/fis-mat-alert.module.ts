import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FisMatAlertComponent } from './component/fis-mat-alert.component';
import { FisMatAlertService } from './service/fis-mat-alert.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [FisMatAlertComponent],
})
export class FisMatAlertModule {
  static forRoot(): ModuleWithProviders<FisMatAlertModule> {
    return {
      ngModule: FisMatAlertModule,
      providers: [FisMatAlertService],
    };
  }
}
