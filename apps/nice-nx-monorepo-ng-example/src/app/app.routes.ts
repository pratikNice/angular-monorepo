import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
