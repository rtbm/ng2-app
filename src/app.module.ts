import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { ROUTING } from './routes';
import { SERVICES_PROVIDERS } from './services';
import { ACTIONS_PROVIDERS } from './actions';
import { EPICS_PROVIDERS } from './epics';
import { APP_COMPONENTS } from './components';
import { APP_CONTAINERS } from './containers';
import { QtAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    ROUTING,
  ],
  declarations: [
    ...APP_COMPONENTS,
    ...APP_CONTAINERS,
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
