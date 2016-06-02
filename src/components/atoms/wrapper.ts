import {Component} from "@angular/core";

@Component({
  selector: 'x-wrapper',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      padding: 0 2rem;
      width: 100%;
      box-sizing: border-box;
    }
  `],
})
export class XWrapperComponent {
}
