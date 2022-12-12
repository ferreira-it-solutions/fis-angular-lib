import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertType, DialogActionData, DialogData } from '../model/fis-mat-alert.model';

@Component({
    selector: 'dialog-component',
    templateUrl: './fis-mat-alert.component.html',
    styleUrls: ['./fis-mat-alert.component.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class FisMatAlertComponent {
    model: any;
    splitMessage!: string[];

    constructor(
        public dialogRef: MatDialogRef<FisMatAlertComponent>,
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

    onClick(ok: any) {
        this.dialogRef.close({
            result: ok,
            model: this.model,
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

    getClassButton(noClick = false) {
        return [
            this.data.type,
            noClick
                ? !this.data.invert
                    ? 'mat-mdc-outlined-button'
                    : 'mat-mdc-unelevated-button'
                : !this.data.invert
                ? 'mat-mdc-unelevated-button'
                : 'mat-mdc-outlined-button',
        ]/* .map((el) => {
            if (el?.includes('color-')) {
                return `mat-${this.data.type}`;
            }
            return el;
        }) */;
    }
}
