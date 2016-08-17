import { Routes, RouterModule } from '@angular/router';
import { ACCOUNT_ROUTES } from './account.routes';
import { HOME_ROUTES } from './home.routes';
import { USER_ROUTES } from './user.routes';

const appRoutes: Routes = [
  ...ACCOUNT_ROUTES,
  ...HOME_ROUTES,
  ...USER_ROUTES,
];

export const routing = RouterModule.forRoot(appRoutes);
