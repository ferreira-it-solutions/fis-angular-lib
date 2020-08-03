import { Directive, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[fisUpperCase]'
})
export class UpperCaseDirective {
  constructor(private elementRef: ElementRef) {
    if (this.elementRef.nativeElement.value) {
      this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.toUpperCase();
    }
  }
  @HostListener('input', ['$event'])
  onInput(event: any) {
    let modify = '';
    if (this.elementRef.nativeElement.value) {
      modify = this.elementRef.nativeElement.value;
    } else {
      modify = event.target.value;
    }
    modify = modify.toLocaleUpperCase();
    this.elementRef.nativeElement.value = modify;
  }
}
