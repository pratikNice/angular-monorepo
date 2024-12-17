import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { NxWelcomeComponent } from './nx-welcome.component';
// import { LandingPageComponent } from '../landing-page/landing-page.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthService } from '@angular-monorepo/shared/services';
import { materialModules, NavbarComponent } from '@angular-monorepo/shared/ui';

@Component({
  imports: [NavbarComponent, RouterModule, ...materialModules],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'nice-nx-monorepo-ng-example';
  constructor(public authService: AuthService) {
    console.log('AppComponent constructor');
  }
}
