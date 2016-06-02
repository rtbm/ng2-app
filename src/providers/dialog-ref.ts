import { PromiseWrapper } from '@angular/core/src/facade/promise';

export class DialogRef {
  private deferred: any;
  public destroy: any;

  constructor() {
    this.deferred = PromiseWrapper.completer();
  }

  resolve() {
    this.deferred.resolve();
    this.destroy();
  }

  reject() {
    this.deferred.reject();
    this.destroy();
  }

  get result() {
    return this.deferred.promise;
  }
}
