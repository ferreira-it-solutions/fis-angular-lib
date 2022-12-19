import { Component, Input } from '@angular/core';
import { FisLoadingService } from '../loading.service';

@Component({
  selector: 'fis-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() loading: boolean = true;

  config = this._loadingService.configuration;

  constructor(private _loadingService: FisLoadingService) {}

  getStyles(color: string) {
    return {
      backgroundColor: color,
    }
  }
}
