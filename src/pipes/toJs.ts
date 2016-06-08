import { Pipe, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ObservableWrapper } from '@angular/common/src/facade/async';

@Pipe({ name: 'toJS',  pure: false })

export class ToJsPipe implements OnDestroy {
  private _obj: Observable<any> = null;
  private _latestValue: any = null;
  private _ref: any;

  constructor(ref: ChangeDetectorRef) {
    this._ref = ref;
  }

  createSubscription(async): any {
    return ObservableWrapper.subscribe(async, (value: any) => this.updateValue(value), e => { throw e; });
  }

  updateValue(value) {
    this._latestValue = value;
    this._ref.markForCheck();
  }

  transform(async: any, args: any[] = null): any {
    if(!this._obj) {
      if(async) {
        this._obj = this.createSubscription(async);
      }
    }
    return this._latestValue.toJS();
  }

  ngOnDestroy() {
    if(!this._obj) {
      ObservableWrapper.dispose(this._obj);
      this._obj = null;
    }
  }
}
