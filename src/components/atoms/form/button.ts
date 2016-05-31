import {Input, Output, Component, EventEmitter} from "@angular/core";

@Component({
  selector: 'x-button',
  template: `
    <button [type]="type" (click)="handleClick($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {           
      outline: 0;
      padding: .75rem 1.5rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 500;
      background: #00b386;
      color: white;
      border: 0 none;
      border-top: .1rem solid #00cc99;
      border-bottom: .1rem solid #008060;
      border-radius: .4rem;
      cursor: pointer;
    }
  `],
})
export class XButtonComponent {
  @Input() type: string = 'button';
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event) {
    this.onClick.emit(event);
  }
}
