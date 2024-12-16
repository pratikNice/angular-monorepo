import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
];

@Component({
  imports: [NxWelcomeComponent, DashboardComponent, LandingPageComponent, RouterModule, ...materialModules],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nice-nx-monorepo-ng-example';
}
