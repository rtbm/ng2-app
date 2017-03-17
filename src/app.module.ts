import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { ROUTING } from './routes';
import { SERVICES_PROVIDERS } from './services';
import { ACTIONS_PROVIDERS } from './actions';
import { EPICS_PROVIDERS } from './epics';
import { QtAppComponentsModule } from './components';
import { QtAppContainersModule } from './containers';
import { QtAppComponent } from './app.component';

@NgModule({
  imports: [
    NgReduxModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    ROUTING,
    QtAppComponentsModule,
    QtAppContainersModule,
  ],
  declarations: [
    QtAppComponent,
  ],
  bootstrap: [
    QtAppComponent,
  ],
  providers: [
    Title,
    FormBuilder,
    ...SERVICES_PROVIDERS,
    ...ACTIONS_PROVIDERS,
    ...EPICS_PROVIDERS,
  ],
})
export class QtAppModule {
}
