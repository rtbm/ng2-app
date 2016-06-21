import { Component, EventEmitter, Output } from '@angular/core';
import { ControlGroup, Control, FormBuilder, Validators } from '@angular/common';
import {
  XFormComponent,
  XFormTextareaComponent,
  XFormActionsComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormMessageComponent
} from '../../components/form';
import { XButtonComponent } from '../../components/button';
import { XBoxComponent } from '../../components/box';
import { XBoxHeaderComponent } from '../../components/box';
import { XBoxContentComponent } from '../../components/box';

@Component({
  selector: 'qt-dashboard-quote-add',
  directives: [XFormComponent, XFormGroupComponent, XFormTextareaComponent, XFormActionsComponent,
    XButtonComponent, XFormInputComponent, XFormMessageComponent, XBoxComponent, XBoxHeaderComponent,
    XBoxContentComponent],
  template: require('./dashboard-quote-add.component.html'),
  styles: [require('./dashboard-quote-add.component.less')],
})
export class QtDashboardQuoteAddComponent {
  @Output() private onSubmit = new EventEmitter();

  private form: ControlGroup;
  private name: Control;
  private content: Control;
  private url: Control;

  constructor(private builder: FormBuilder) {
    this.name = new Control('', Validators.required);
    this.content = new Control('', Validators.required);
    this.url = new Control('', Validators.required);

    this.form = this.builder.group({
      name: this.name,
      content: this.content,
      url: this.url,
    });
  }

  handleSubmit() {
    if (this.form.status !== 'VALID') return false;
    this.onSubmit.emit(this.form.value);
  }
}
