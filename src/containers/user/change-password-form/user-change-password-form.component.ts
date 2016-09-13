import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'qt-user-change-password-form',
  template: require('./user-change-password-form.component.html'),
  styles: [require('./user-change-password-form.component.scss')],
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

    this.token = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]);
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
