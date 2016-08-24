import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  XFormComponent,
  XFormInputComponent,
  XFormGroupComponent,
  XFormActionsComponent,
  XFormMessageComponent,
  XLabelComponent,
  XButtonComponent,
  XFormContentComponent,
  XFormErrorComponent,
} from '../../../components';

@Component({
  selector: 'qt-user-change-password-form',
  template: require('./user-change-password-form.component.html'),
  styles: [require('./user-change-password-form.component.scss')],
  directives: [ROUTER_DIRECTIVES, XFormComponent, XLabelComponent, XButtonComponent, XFormInputComponent,
    XFormGroupComponent, XFormActionsComponent, XFormMessageComponent, XFormContentComponent, XFormErrorComponent],
})
export class QtUserChangePasswordFormComponent implements OnDestroy {
  @Output() private onSubmit = new EventEmitter();

  private form: FormGroup;
  private email: FormControl;
  private token: FormControl;
  private password: FormControl;
  private password_confirm: FormControl;
  private isSubmitted: boolean;
  private routeParamsSubscription: Subscription;

  constructor(private builder: FormBuilder,
              private activatedRoute: ActivatedRoute) {

    this.email = new FormControl('', Validators.required);
    this.token = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.password_confirm = new FormControl('', Validators.required);

    this.form = this.builder.group({
      password: this.password,
      password_confirm: this.password_confirm,
      token: this.token,
    });

    this.routeParamsSubscription = this.activatedRoute.params.subscribe((params: any) => {
      this.token.setValue(params.token);
    });
  }

  handleSubmit() {
    this.isSubmitted = true;

    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  ngOnDestroy = () => this.routeParamsSubscription.unsubscribe();
}
