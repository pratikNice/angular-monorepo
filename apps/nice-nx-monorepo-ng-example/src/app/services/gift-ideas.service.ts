import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GiftIdeasService {
  private giftIdeas: { name: string; description: string }[] = [];

  getGiftIdeas() {
    return this.giftIdeas;
  }

  addGiftIdea(name: string) {
    this.giftIdeas.push({ name, description: '' });
  }
}
