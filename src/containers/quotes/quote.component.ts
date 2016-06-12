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
  @Input() quote: Object;
  @Output() onRemove = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  private edit: boolean;

  constructor() {
  }

  handleEditClick() {
    this.edit = true;
    console.log(this.edit);
  }

  handleRemoveClick(event) {
    console.log('delete');
    this.onRemove.emit(event);
  }
}
