import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '@angular-monorepo/shared/ui';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: { [username: string]: string } = {};
  public isLoggedIn = false;
  public userInitials: string | null = null;

  constructor(private dialog: MatDialog,private router: Router) {}

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
        this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials!');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.userInitials = null;
    this.router.navigate(['/']);
  }

  showAuthModal() {
    // Show modal logic here
    this.dialog.open(AuthModalComponent, {
        width: '450px',
      });
  }
}
