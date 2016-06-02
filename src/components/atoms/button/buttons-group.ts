import { Component } from '@angular/core';

@Component({
  selector: 'x-buttons-group',
  template: `
    <ng-content></ng-content>
    <span class="delimeter">or</span>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
    }
    
    .delimeter {
      background: #fff;
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      position: absolute;
      top: calc(50% - 1.5rem);
      left: calc(50% - 1.5rem);
      line-height: 3rem;
      font-size: 1.2rem;
    }
  `],
})
export class XButtonsGroupComponent {
}
