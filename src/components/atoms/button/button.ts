import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'x-button',
  template: `
    <button [type]="type" (click)="handleClick($event)" class="{{preset}} {{size}}">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {           
      outline: 0;
      text-transform: uppercase;
      font-weight: 700;     
      border: 0 none;
      border-radius: .4rem;
      cursor: pointer;
    }
    
    button.normal {
      padding: .75rem 1.5rem;
      font-size: 1.2rem;
    }
    
    button.big {
      padding: 1rem 3rem;
      font-size: 1.5rem;
    }
    
    button.casual {
      color: white;
      background: #4DBCE9;
      border-top: .1rem solid #53c8fa;
      border-bottom: .1rem solid #2e738f;
    }
    
    button.positive {
      color: white;
      background: #00A000;
      border-top: .1rem solid #00c900;
      border-bottom: .1rem solid #006000;
    }
    
    button.negative {
      color: white;
      background: #C21F39;
      border-top: .1rem solid #d1213d;
      border-bottom: .1rem solid #9e192d;
    }
  `],
})
export class XButtonComponent {
  @Input() type: string = 'button';
  @Input() preset: string = 'casual';
  @Input() size: string = 'normal';
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event) {
    this.onClick.emit(event);
  }
}
