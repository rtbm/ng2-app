import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: `
    <button [type]="type" (click)="handleClick($event)" class="preset-{{preset}} size-{{size}}">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    button {
      outline: 0;
      background: transparent;
      text-transform: uppercase;
      font-weight: 700;
      border: 0 none;
      cursor: pointer;
    }

    button.size-normal {
      padding: .75rem 1.5rem;
      font-size: 1.2rem;
    }

    button.size-big {
      padding: 1rem 3rem;
      font-size: 1.5rem;
    }

    button.preset-casual {
      color: white;
      background: #4DBCE9;
      border-bottom: .1rem solid #2e738f;
    }

    button.preset-positive {
      color: white;
      background: #6db76d;
      border-bottom: .1rem solid #006000;
    }

    button.preset-negative {
      color: white;
      background: #C21F39;
      border-bottom: .1rem solid #9e192d;
    }
  `],
})
export class XButtonComponent {
  @Input() type: string = 'button';
  @Input() preset: string = '';
  @Input() size: string = '';
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event) {
    this.onClick.emit(event);
  }
}
