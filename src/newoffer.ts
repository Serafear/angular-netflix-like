import { Component } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  template: `
    <div class="offer">
      <span class="offer-header">NOUVEAU !</span>
      <span class="offer-text">Offres désormais disponibles à partir de 5,99 €./mois</span>
    </div>
  `,
  styles: [
    `
    .offer {
      background-color: red;
      color: white;
      padding: 10px;
    }
    
    .offer-header {
      font-weight: bold;
    }
  `,
  ],
})
export class NewOfferComponent {}
