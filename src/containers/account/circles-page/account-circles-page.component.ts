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
} from '../../../components';
import { CirclesActions } from '../../../actions/circles';
import { select } from 'ng2-redux';
import { QtAccountCircleAddFormComponent } from '../circle-add-form';
import { QtAccountCircleEditFormComponent } from '../circle-edit-form';

@Component({
  selector: 'qt-account-circles-page',
  template: require('./account-circles-page.component.html'),
  styles: [require('./account-circles-page.component.less')],
  directives: [XWrapperComponent, XButtonComponent, XListComponent, XListItemComponent, XListItemContentComponent,
    XListItemActionsComponent, XDialogConfirmComponent, QtAccountCircleAddFormComponent,
    QtAccountCircleEditFormComponent, XModalFormComponent, XBoxComponent, XBoxContentComponent],
})
export class QtAccountCirclesPageComponent implements OnDestroy {
  @select(state => state.circles) private circles$;

  private circles;

  constructor(private circlesActions: CirclesActions) {
    this.circlesActions.fetchCircles();

    this.circles$.subscribe((circles: any) => {
      this.circles = circles.toJS();
    });
  }

  ngOnDestroy() {
    this.circles$.unsubscribe();
  }
}
