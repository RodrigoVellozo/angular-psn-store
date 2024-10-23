import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";
import { GameModel } from '../../models/game-model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  public data!: GameModel;

}
