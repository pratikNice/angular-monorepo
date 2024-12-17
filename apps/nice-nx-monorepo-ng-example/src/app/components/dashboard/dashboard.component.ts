import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GiftIdeasService } from '../../services/gift-ideas.service';
import { AuthService } from '@angular-monorepo/shared/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { materialModules } from '@angular-monorepo/shared/ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, FormsModule, ...materialModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
  giftIdeas: { name: string; description: string }[] = [];
  newGiftIdea = '';

  constructor(
    private giftIdeasService: GiftIdeasService,
    private authService: AuthService
  ) {
    this.giftIdeas = this.giftIdeasService.getGiftIdeas();
  }

addIdea() {
    if (this.authService.isLoggedIn) {
        if (this.newGiftIdea.trim()) {
            this.giftIdeasService.addGiftIdea(this.newGiftIdea);
            this.newGiftIdea = '';
        }
    } else {
        // Show dialog requesting for login
        alert('Please log in to add a gift idea.');
    }
}
}
