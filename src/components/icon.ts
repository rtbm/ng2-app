import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-icon',
  template: `
    <span class="size-{{size}} material-icons"><ng-content></ng-content></span>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    
    :host span {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    
    :host .size-small {      
      font-size: 2rem;
    }
    
    :host .size-normal {
      font-size: 3rem;
    }
    
    :host .size-big {
      font-size: 4rem;
    }
  `]
})
export class XIconComponent {
  @Input() size: string = 'normal';
  @Input() type: string = '';
}
