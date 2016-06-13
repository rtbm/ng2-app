import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { XListItemActionsComponent } from '../../components/list';
import { XListItemContentComponent } from '../../components/list';
import { XButtonComponent } from '../../components/button';
import { XFormGroupComponent } from '../../components/form';
import { QtQuotesFormComponent } from './quotes-form.component';

@Component({
  selector: 'qt-quote',
  directives: [XButtonComponent, XListItemContentComponent, XListItemActionsComponent, XFormGroupComponent,
    QtQuotesFormComponent],
  template: require('./quote.component.html'),
  styles: [require('./quote.component.less')],
})
export class QtQuoteComponent {
  @Input() private quote: Object;
  @Output() private onRemove = new EventEmitter();
  @Output() private onEdit = new EventEmitter();

  private edit: boolean = false;

  constructor() {
  }

  handleEditClick(event) {
    console.log('quote edit click');
    this.edit = true;
    console.log(this.edit);
    this.onEdit.emit(event);
  }

  handleRemoveClick(event) {
    console.log('quote remove click');
    this.onRemove.emit(event);
  }
}
