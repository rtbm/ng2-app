import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_COMPONENTS } from './app.components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    ...APP_COMPONENTS,
  ],
  exports: [
    ...APP_COMPONENTS,
  ],
  providers: [
    FormBuilder,
  ],
})
export class QtAppComponentsModule {
}
