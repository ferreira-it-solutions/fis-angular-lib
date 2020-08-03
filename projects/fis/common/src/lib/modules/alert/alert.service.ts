import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, of, Subject } from 'rxjs';
import {
  AlertPositionHorizontal,
  AlertPositionVertical,
  AlertTime,
  AlertType,
  DialogActionData,
  DialogData,
  IAlert
} from '../../models';
import { AlertDialogComponent } from './dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private snackBar: MatSnackBar, public matDialog: MatDialog) {}

  getAlerts = () => {
    return of(alert);
  };

  dispatchAlert(alert: IAlert) {
    const snack = this.snackBar.open(
      alert.message,
      alert.action ? alert.action.text : undefined,
      {
        duration: alert.duration * 500,
        panelClass: alert.type,
        horizontalPosition: alert.pos.horizontal,
        verticalPosition: alert.pos.vertical
      }
    );

    snack.onAction().subscribe(action => {
      if (alert.action.onAction) {
        alert.action.onAction(action);
      }
    });
  }

  dialog = (data: DialogData, onClick?: (param: DialogActionData) => any) => {
    const dialogRef = this.matDialog.open(AlertDialogComponent, {
      maxWidth: data.maxWidth || '75%',
      maxHeight: data.maxHeight || 'auto',
      width: data.width || 'auto',
      height: data.height || 'auto',
      minWidth: data.minWidth || 'auto',
      minHeight: data.minHeight || 'auto',
      data
    });

    dialogRef.afterClosed().subscribe((result: DialogActionData) => {
      if (onClick) {
        onClick(result);
      }
    });
  };

  snack = (
    message,
    type: AlertType = AlertType.DEFAULT,
    time = AlertTime.DEFAULT,
    pos = {
      vertical: AlertPositionVertical.TOP,
      horizontal: AlertPositionHorizontal.RIGHT
    },
    action?
  ) => {
    this.dispatchAlert({
      message,
      type,
      duration: time,
      pos,
      action
    });
  };
}
