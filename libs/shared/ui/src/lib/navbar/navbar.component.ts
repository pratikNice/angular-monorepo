import { Component, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@nice-nx-monorepo-ng-example/shared/services'; 

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


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
  selector: 'lib-navbar',
  imports: [CommonModule, ...materialModules],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent  {
  @Input() isLoggedIn = false;
  @Input() userInitials: string | null = null;
  @Output() loginClicked = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  constructor(public authService: AuthService) {
    console.log('NavbarComponent constructor');
  }

  logout() {
    this.authService.logout();
    this.logoutClicked.emit();
  }
}
