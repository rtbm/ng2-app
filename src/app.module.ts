import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './routes';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { QtAppComponent } from './app.component';
import { SERVICES_PROVIDERS } from './services';
import { ACTIONS_PROVIDERS } from './actions';
import { EPICS_PROVIDERS } from './epics';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    routing,
  ],
  declarations: [
    QtAppComponent,
  ],
  bootstrap: [
    QtAppComponent,
  ],
  providers: [
    FormBuilder,
    NgRedux,
    ...SERVICES_PROVIDERS,
    ...ACTIONS_PROVIDERS,
    ...EPICS_PROVIDERS,
  ],
})

export class QtAppModule {
}
