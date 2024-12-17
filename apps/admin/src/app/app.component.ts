import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxAdminWelcomeComponent } from './nx-welcome.component';
import { AuthService } from '@angular-monorepo/shared/services';
import { NavbarComponent } from '@angular-monorepo/shared/ui';

@Component({
  imports: [NxAdminWelcomeComponent, NavbarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';

  constructor(public authService: AuthService) {
    console.log('Admin AppComponent constructor');
  }
}
