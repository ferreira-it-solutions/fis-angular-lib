import { Component } from '@angular/core';
import { FisLoadingService } from 'projects/fis-lib/loading/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fis-angular-lib';

  constructor(public loadingService: FisLoadingService) {
    this.loadingService.show();

    setTimeout(() => {
      this.loadingService.hide();
    }, 5000);
  }


}
