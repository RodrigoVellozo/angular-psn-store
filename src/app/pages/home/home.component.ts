import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public data = this.gamesService.getGames();

  constructor(private gamesService: GamesService){}

}
