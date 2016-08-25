import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-tooltip',
  template: require('./tooltip.component.html'),
  styles: [require('./tooltip.component.scss')],
})
export class XTooltipComponent {
  @Input() tooltip: string;
}
