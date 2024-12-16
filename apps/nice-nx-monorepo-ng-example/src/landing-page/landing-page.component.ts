import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './landing-page.component.html',
  styles: [`
    .navbar { display: flex; justify-content: space-between; padding: 1rem; background-color: #f8f9fa; }
    .navbar-brand { font-size: 1.5rem; }
    .navbar-end { display: flex; align-items: center; }
    .user-thumbnail { width: 40px; height: 40px; background-color: #007bff; color: white; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
    .container { padding: 1rem; }
    ul { list-style-type: none; padding: 0; }
    li { padding: 0.5rem 0; }
    input { margin-right: 0.5rem; }
    .modal { display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); }
    .modal-content { background-color: white; padding: 2rem; border-radius: 5px; }
    .close { position: absolute; top: 10px; right: 10px; cursor: pointer; }
  `],
})
export class LandingPageComponent {
  isLoggedIn = false;
  userInitials = 'JD';
  giftIdeas: string[] = ['Gift Idea 1', 'Gift Idea 2'];
  newIdea = '';
  showModal = false;
  modalType: 'login' | 'signup' = 'login';
  username = '';
  password = '';
  users: { [key: string]: string } = {};

  openModal(type: 'login' | 'signup') {
    this.modalType = type;
    this.showModal = true;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.closeModal();
    }
  }

  closeModal() {
    this.showModal = false;
    this.username = '';
    this.password = '';
  }

  login() {
    if (this.users[this.username] === this.password) {
      this.isLoggedIn = true;
      this.userInitials = this.username.charAt(0).toUpperCase() + this.username.charAt(1).toUpperCase();
      this.closeModal();
    } else {
      alert('Invalid username or password');
    }
  }

  signup() {
    if (this.username && this.password) {
      this.users[this.username] = this.password;
      this.isLoggedIn = true;
      this.userInitials = this.username.charAt(0).toUpperCase() + this.username.charAt(1).toUpperCase();
      this.closeModal();
    } else {
      alert('Please enter a username and password');
    }
  }

  addIdea() {
    if (this.newIdea.trim()) {
      this.giftIdeas.push(this.newIdea.trim());
      this.newIdea = '';
    }
  }
}
