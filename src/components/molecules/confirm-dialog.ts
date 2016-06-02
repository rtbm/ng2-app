import { Component } from '@angular/core';
import { DialogRef } from '../../providers/dialog-ref';
import { XButtonComponent } from '../atoms/button/button';
import { XFormGroupComponent } from '../atoms/form/form-group';
import { XButtonsGroupComponent } from '../atoms/button/buttons-group';

@Component({
  selector: 'x-dialog',
  directives: [XButtonComponent, XFormGroupComponent, XButtonsGroupComponent],
  template: `
    <div class="dialog">
        <p>Are you sure?</p>
        <x-buttons-group>
          <x-button size="big" preset="negative" (click)="dialogRef.reject()">No</x-button>
          <x-button size="big" preset="positive" (click)="dialogRef.resolve()">Yes</x-button>
        </x-buttons-group>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .8);
    }
  
    p {
      font-size: 2.3rem;
      margin: 0 0 2rem;
    }
  
    .dialog {
      background: #fff;
      display: inline-block;
      padding: 2rem;
      text-align: center;
    }
  
    x-button {
      width: 30rem;
    }
  `],
})
export class XDialogComponent {
  constructor(private dialogRef: DialogRef) {
  }
}
