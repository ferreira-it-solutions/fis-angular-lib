import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AlertDemoComponent } from './alert-demo/alert-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [AlertDemoComponent],
  providers: [],
})
export class PagesModule {}
