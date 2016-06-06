import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-icon',
  template: `
    <span class="size-{{size}} material-icons">{{type}}</span>
  `,
  styles: [`
    :host .size-small {
      font-size: 2rem;
    }
    
    :host .size-normal {
      font-size: 2.5rem;
    }
    
    :host .size-big {
      font-size: 3rem;
    }
  `]
})
export class XIconComponent {
  @Input() size: string = 'normal';
  @Input() type: string = '';
}
