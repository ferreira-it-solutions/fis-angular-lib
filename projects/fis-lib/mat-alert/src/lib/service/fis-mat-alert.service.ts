import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { FisMatAlertComponent } from '../component/fis-mat-alert.component';
import {
  AlertPositionHorizontal,
  AlertPositionVertical,
  AlertTime,
  AlertType,
  DialogActionData,
  DialogData,
  IAlert
} from '../model/fis-mat-alert.model';

@Injectable({
  providedIn: 'root',
})
export class FisMatAlertService {
  constructor(private snackBar: MatSnackBar, public matDialog: MatDialog) {}

  getAlerts = () => {
    return of(alert);
  };

  dispatchAlert(alert: IAlert) {
    let configSnack = {
      duration: (alert.duration || AlertTime.DEFAULT) * 500,
      panelClass: alert.type,
    } as MatSnackBarConfig;
    if (alert.pos) {
      configSnack = {
        ...configSnack,
        horizontalPosition: alert.pos.horizontal,
        verticalPosition: alert.pos.vertical,
      };
    }

    const snack = this.snackBar.open(
      alert?.message || '',
      alert.action ? alert.action.text : undefined,
      configSnack
    );

    snack.onAction().subscribe((action) => {
      if (alert.action) {
        if (alert.action.onAction) {
          alert.action.onAction(action);
        }
      }
    });
  }

  dialog = (data: DialogData, onClick?: (param: DialogActionData) => any) => {
    const dialogRef = this.matDialog.open(FisMatAlertComponent, {
      // maxWidth: data.maxWidth || '75%',
      // maxHeight: data.maxHeight || 'auto',
      // width: data.width || '100%',
      // height: data.height || 'auto',
      minWidth: data.minWidth || '25%',
      // minHeight: data.minHeight || 'auto',
      data,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result: DialogActionData) => {
      if (onClick) {
        onClick(result);
      }
    });
  };

  /*
   * @param message message to be displayed
   * @param type type of alert
   * @param time duration of alert
   */
  snack = (
    message: any,
    /**
     * default (DEFAULT) (success, error, warning, info, default, primary, accent)
     */
    type: AlertType = AlertType.DEFAULT,
    /**
     * 2000ms (DEFAULT)
     *
     * VERY_SHORT = 500
     * SHORT = 1000
     * DEFAULT = 2000
     * LONG = 3000
     * VERY_LONG = 5000
     */
    time = AlertTime.DEFAULT,
    /**
     * vertical   TOP   (DEFAULT)
     * horizontal RIGHT (DEFAULT)
     *
     * vertical: TOP, BOTTOM
     * horizontal: LEFT, RIGHT, CENTER
     */
    pos = {
      vertical: AlertPositionVertical.TOP,
      horizontal: AlertPositionHorizontal.RIGHT,
    },
    /**
     * function as action button response
     */
    action?: any
  ) => {
    this.dispatchAlert({
      message,
      type,
      duration: time,
      pos,
      action,
    });
  };
}
