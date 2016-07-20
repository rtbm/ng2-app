import { Component, OnDestroy } from '@angular/core';
import {
  XListComponent,
  XListItemComponent,
  XListItemContentComponent,
  XListItemActionsComponent,
  XWrapperComponent,
  XDialogConfirmComponent,
  XButtonComponent,
  XModalFormComponent,
  XBoxComponent,
  XBoxContentComponent,
  XBoxHeaderComponent,
  XFormMessageComponent,
} from '../../../components';
import { CirclesActions } from '../../../actions/circles.actions';
import { select } from 'ng2-redux';
import { QtAccountCircleAddFormComponent } from '../circle-add-form';
import { QtAccountCircleEditFormComponent } from '../circle-edit-form';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'qt-account-circles-page',
  template: require('./account-circles-page.component.html'),
  styles: [require('./account-circles-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtAccountCircleAddFormComponent, XFormMessageComponent,
    QtAccountCircleEditFormComponent, XModalFormComponent, XBoxComponent, XBoxContentComponent, XBoxHeaderComponent],
  pipes: [AsyncPipe],
})
export class QtAccountCirclesPageComponent implements OnDestroy {
  @select(state => state.circles) private circles$;

  private circlesItems$: Observable<Object>;

  private isSaveCircleSuccess$: Observable<boolean>;
  private isSaveCircleError$: Observable<boolean>;

  private isUpdateCircleModalVisible$: Observable<boolean>;
  private isUpdateCircleSuccess$: Observable<boolean>;
  private isUpdateCircleError$: Observable<boolean>;
  private updateCircleItem$: Observable<any>;

  private isRemoveCircleConfirmVisible$: Observable<boolean>;
  private removeCircleItem$: Observable<any>;
  private removeCircleItemName$: Observable<any>;
  private isRemoveCircleSuccess$: Observable<boolean>;
  private isRemoveCircleError$: Observable<boolean>;

  constructor(private circlesActions: CirclesActions) {
    this.circlesActions.fetchCircles();

    this.circlesItems$ = this.circles$.map(s => s.getIn(['circles', 'items']).toJS());

    this.isSaveCircleSuccess$ = this.circles$.map(s => s.getIn(['saveCircle', 'isSuccess']));
    this.isSaveCircleError$ = this.circles$.map(s => s.getIn(['saveCircle', 'isError']));

    this.isUpdateCircleModalVisible$ = this.circles$.map(s => s.getIn(['updateCircle', 'isModalVisible']));
    this.isUpdateCircleSuccess$ = this.circles$.map(s => s.getIn(['updateCircle', 'isSuccess']));
    this.isUpdateCircleError$ = this.circles$.map(s => s.getIn(['updateCircle', 'isError']));
    this.updateCircleItem$ = this.circles$.map(s => s.getIn(['updateCircle', 'item']).toJS());

    this.isRemoveCircleConfirmVisible$ = this.circles$.map(s => s.getIn(['removeCircle', 'isConfirmVisible']));
    this.removeCircleItem$ = this.circles$.map(s => s.getIn(['removeCircle', 'item']).toJS());
    this.removeCircleItemName$ = this.circles$.map(s => s.getIn(['removeCircle', 'item', 'name']));
    this.isRemoveCircleSuccess$ = this.circles$.map(s => s.getIn(['removeCircle', 'isSuccess']));
    this.isRemoveCircleError$ = this.circles$.map(s => s.getIn(['removeCircle', 'isError']));
  }

  handleRemoveCircle() {
    let removeCircleItem: Object = {};

    this.removeCircleItem$
      .first()
      .subscribe((circle: Object) => { removeCircleItem = circle; })
      .unsubscribe();

    this.circlesActions.removeCircle(removeCircleItem);
  }

  ngOnDestroy() {
    this.circles$.unsubscribe();
  }
}
