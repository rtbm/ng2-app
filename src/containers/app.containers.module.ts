import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QtAppComponentsModule } from '../components';
import { APP_CONTAINERS } from './app.containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    QtAppComponentsModule,
  ],
  declarations: [
    ...APP_CONTAINERS,
  ],
  exports: [
    ...APP_CONTAINERS,
  ],
  providers: [
    FormBuilder,
  ],
})
export class QtAppContainersModule {
}
