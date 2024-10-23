import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.scss',
})
export class CardPricingComponent {
  @Input()
  gameType: string = '';

  @Input()
  gamePrice: string = '';
}
