import { Component } from '@angular/core';
import {
  AlertPositionHorizontal,
  AlertPositionVertical,
  AlertTime,
  AlertType,
  FisMatAlertService
} from '@fis-lib/mat-alert';

@Component({
  selector: 'app-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss'],
})
export class AlertDemoComponent {

  compare = (a: any, b: any) => a == b;

  alertMinTime = 500;
  type: 'snack' | 'dialog' = 'dialog';

  alert: {
    title?: string;
    label?: string;
    message?: string;
    type?: AlertType;
    duration?: AlertTime;
    verticalPosition: AlertPositionVertical;
    horizontalPosition: AlertPositionHorizontal;
    action?: {
      text: string;
      onAction: (param: any) => any;
    };
    okText?: string;
    noText?: string;
    noClick?: boolean;
    model?: string;
    hasModel?: boolean;
    innerHTML?: string;
    height?: string;
    width?: string;
    minWidth?: string;
    minHeight?: string;
    maxWidth?: string;
    maxHeight?: string;
  } = {
    label: 'default',
    message: 'Mensagem de Teste',
    type: AlertType.SUCCESS,
    duration: AlertTime.VERY_LONG,
    verticalPosition: AlertPositionVertical.TOP,
    horizontalPosition: AlertPositionHorizontal.RIGHT,
    action: {
      text: '',
      onAction: (param) => {
        console.log('call');
      },
    },
    title: 'Confirmar?',
    model: '',
    innerHTML: '<strong>Exemplo</strong>',
  };

  types = Object.keys(AlertType).map((k) => (AlertType as any)[k] as AlertType);
  durations = Object.keys(AlertTime)
    // tslint:disable-next-line: radix
    .filter((k) => !parseInt(k))
    .map((k) => (AlertTime as any)[k]);
  horizontalPos = Object.keys(AlertPositionHorizontal).map(
    (k) => (AlertPositionHorizontal as any)[k]
  );
  verticalPos = Object.keys(AlertPositionVertical).map(
    (k) => (AlertPositionVertical as any)[k]
  );

  constructor(
    public alertService: FisMatAlertService,
  ) {}

  dispatch() {
    if (this.type === 'snack') {
      this.alertService.snack(
        this.alert.message,
        this.alert.type,
        this.alert.duration,
        {
          vertical: this.alert.verticalPosition,
          horizontal: this.alert.horizontalPosition,
        },
        this.alert.action
      );
    } else {
      this.alertService.dialog(
        {
          title: this.alert.title,
          message: this.alert.message,
          model: this.alert.model,
          okText: this.alert.okText,
          noText: this.alert.noText,
          noClick: this.alert.noClick,
          hasModel: this.alert.hasModel,
          type: this.alert.type,
          innerHTML: this.alert.innerHTML,
          height: this.alert.height,
          width: this.alert.width,
          minWidth: this.alert.minWidth,
          minHeight: this.alert.minHeight,
          maxWidth: this.alert.maxWidth,
          maxHeight: this.alert.maxHeight,
        },
        (param) => {
          if (param) {
            this.alertService.snack(
              `Clicou em ${
                param.result
                  ? this.alert.okText
                    ? this.alert.okText
                    : 'Ok'
                  : this.alert.noText
                  ? this.alert.noText
                  : 'Cancelar'
              }${param.model ? ` ---------------> ${param.model}` : ''}`
            );
          }
        }
      );
    }
  }

  get call() {
    const alertMessage = JSON.stringify(this.alert.message)
      .replace('"', '')
      .replace('"', '');
    if (this.type === 'snack') {
      if (
        this.alert.verticalPosition === AlertPositionVertical.TOP &&
        this.alert.horizontalPosition === AlertPositionHorizontal.RIGHT
      ) {
        if (this.alert.duration === AlertTime.DEFAULT) {
          if (this.alert.type === AlertType.DEFAULT) {
            return `this.alertService.snack(\'${alertMessage}\')`;
          } else {
            return `this.alertService.snack(\'${alertMessage}\', AlertType.${this.alert.type?.toUpperCase()});`;
          }
        } else {
          return `this.alertService.snack(\'${alertMessage}\', AlertType.${this.alert.type?.toUpperCase()}, AlertTime.${
            AlertTime[this.alert.duration ?? 0]
          });`;
        }
      } else {
        return `this.alertService.snack(\n\t\'${alertMessage}\', \n\tAlertType.${this.alert.type?.toUpperCase()}, \n\tAlertTime.${
          AlertTime[this.alert.duration ?? 0]
        }, \n\t{
        \tvertical: AlertPositionVertical.${this.alert.verticalPosition.toUpperCase()},
        \thorizontal: AlertPositionHorizontal.${this.alert.horizontalPosition.toUpperCase()}
        \n\t}\n);`;
      }
    } else {
      return `this.alertService.dialog(\n\t{${
        this.alert.title ? '\n\t\ttitle: ' + `\'${this.alert.title}\',` : ''
      }${
        this.alert.type !== AlertType.DEFAULT
          ? '\n\t\ttype: AlertType.' + this.alert.type?.toUpperCase() + ','
          : ''
      }${this.alert.message ? '\n\t\tmessage: ' + `\'${alertMessage}\',` : ''}${
        this.alert.hasModel ? '\n\t\thasModel: true,' : ''
      }${
        this.alert.hasModel ? '\n\t\tmodel: ' + `\'${this.alert.model}\',` : ''
      }${
        this.alert.innerHTML
          ? '\n\t\tinnerHTML: ' + `\'${this.alert.innerHTML}\',`
          : ''
      }${
        this.alert.okText ? '\n\t\tokText: ' + `\'${this.alert.okText}\',` : ''
      }${
        this.alert.height ? '\n\t\theight: ' + `\'${this.alert.height}\',` : ''
      }${this.alert.width ? '\n\t\twidth: ' + `\'${this.alert.width}\',` : ''}${
        this.alert.minWidth
          ? '\n\t\tminWidth: ' + `\'${this.alert.minWidth}\',`
          : ''
      }${
        this.alert.minHeight
          ? '\n\t\tminHeight: ' + `\'${this.alert.minHeight}\',`
          : ''
      }${
        this.alert.maxWidth
          ? '\n\t\tmaxWidth: ' + `\'${this.alert.maxWidth}\',`
          : ''
      }${
        this.alert.maxHeight
          ? '\n\t\tmaxHeight: ' + `\'${this.alert.maxHeight}\',`
          : ''
      }${
        this.alert.noText ? '\n\t\tnoText: ' + `\'${this.alert.noText}\',` : ''
      }${this.alert.noClick ? '\n\t\tnoClick: true' : ''}\n\t}\n);
  `;
    }
  }
}
