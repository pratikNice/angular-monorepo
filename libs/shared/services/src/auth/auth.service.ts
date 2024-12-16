import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '@nice-nx-monorepo-ng-example/shared/ui';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: { [username: string]: string } = {};
  public isLoggedIn = false;
  public userInitials: string | null = null;

  constructor(private dialog: MatDialog) {}

  signup(username: string, password: string) {
    if (!this.users[username]) {
      this.users[username] = password;
      alert('Signup successful! Please login.');
    } else {
      alert('Username already exists!');
    }
  }

  login(username: string, password: string) {
    if (this.users[username] && this.users[username] === password) {
      this.isLoggedIn = true;
      this.userInitials = username[0].toUpperCase();
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.userInitials = null;
  }

  showAuthModal() {
    // Show modal logic here
    this.dialog.open(AuthModalComponent, {
        width: '400px',
      });
  }
}
