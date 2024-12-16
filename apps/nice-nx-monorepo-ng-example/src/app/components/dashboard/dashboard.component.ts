import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GiftIdeasService } from '../../services/gift-ideas.service';
import { AuthService } from '@nice-nx-monorepo-ng-example/shared/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '@nice-nx-monorepo-ng-example/shared/ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, FormsModule, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
  giftIdeas: { name: string; description: string }[] = [];
  newGiftIdea = '';

  constructor(
    private giftIdeasService: GiftIdeasService,
    public authService: AuthService
  ) {
    this.giftIdeas = this.giftIdeasService.getGiftIdeas();
  }

  addIdea() {
    if (this.newGiftIdea.trim()) {
      this.giftIdeasService.addGiftIdea(this.newGiftIdea);
      this.newGiftIdea = '';
    }
  }
}
