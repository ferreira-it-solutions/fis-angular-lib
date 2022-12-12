import { Component } from '@angular/core';
import { AlertType, FisMatAlertService } from '@fis-lib/mat-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fis-angular-lib';

  constructor(private _alertService: FisMatAlertService) {
    this._alertService.dialog({
      title: 'Test',
      message: 'Test message',
      type: AlertType.ACCENT,
    });
  }
}
