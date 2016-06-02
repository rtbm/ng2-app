import { Injectable, ComponentResolver, ViewContainerRef, ReflectiveInjector, provide } from '@angular/core';
import { XDialogComponent } from '../components/molecules/confirm-dialog';
import { DialogRef } from './dialog-ref';

@Injectable()
export class Dialog {
  constructor(private componentResolver: ComponentResolver) {
  }

  open(viewContainerRef: ViewContainerRef) {
    const ctxInjector = viewContainerRef.parentInjector;
    const dialog = new DialogRef();

    this.componentResolver.resolveComponent(XDialogComponent)
      .then(resolvedComponent => {
        const dialogInjector = ReflectiveInjector.resolve([
          provide(DialogRef, { useValue: dialog }),
        ]);

        const childInjector = ReflectiveInjector.fromResolvedProviders(dialogInjector, ctxInjector);

        return viewContainerRef.createComponent(resolvedComponent, viewContainerRef.length, childInjector);
      })
      .then(cmpRef => {
        dialog.destroy = () => cmpRef.destroy();
      });

    return dialog;
  }
}
