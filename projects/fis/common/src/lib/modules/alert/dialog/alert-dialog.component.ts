import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertType, DialogActionData, DialogData } from '../../../models';

@Component({
  selector: 'fis-dialog-component',
  templateUrl: './alert-dialog.component.html'
})
// tslint:disable-next-line: component-class-suffix
export class AlertDialogComponent {
  model: any;
  splitMessage: string[];

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (this.data.innerHTML) {
      this.data.innerHTML = this.data.innerHTML.replace(/\n/g, '<br/>');
    }
    if (this.data.message) {
      this.splitMessage = this.data.message.split(/\n/g);
    }
    if (this.data.hasModel) {
      this.model = this.data.model;
    }
  }

  onClick(ok) {
    this.dialogRef.close({
      result: ok,
      model: this.model
    } as DialogActionData);
  }

  getIcon() {
    switch (this.data.type) {
      case AlertType.INFO:
        return 'info';
      case AlertType.ERROR:
        return 'error_outline';
      case AlertType.WARNING:
        return 'warning';
      case AlertType.SUCCESS:
        return 'done';
      default:
        return '';
    }
  }
}
