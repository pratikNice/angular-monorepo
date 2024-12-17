import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@angular-monorepo/shared/services';
import { materialModules } from '../material-modules';
@Component({
  selector: 'lib-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss' ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, ...materialModules],
})
export class AuthModalComponent {
  username = '';
  password = '';
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  authenticate() {
    if (this.isLoginMode) {
      this.authService.login(this.username, this.password);
    } else {
      this.authService.signup(this.username, this.password);
    }
  }
}
