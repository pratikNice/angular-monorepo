import { Component, EventEmitter, Input, Output, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@angular-monorepo/shared/services'; 
import { materialModules } from '../material-modules';

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
