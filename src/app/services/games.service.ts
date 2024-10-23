import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  public getGames() {
    return of([
      {
        gameCover: 'assets/bt-1.jpg',
        gamePrice: 'R$ 199,90',
        gameLabel: 'EXCLUSIVE',
        gameType: 'Digital PS4',
      },
      {
        gameCover: 'assets/bt-5.jpg',
        gamePrice: 'R$ 399,90',
        gameLabel: 'EXCLUSIVE',
        gameType: 'DISC PS5',
      },
      {
        gameCover: 'assets/bt-4.jpg',
        gamePrice: 'R$ 299,90',
        gameLabel: 'EXCLUSIVE',
        gameType: 'DISC PS4',
      },
      {
        gameCover: 'assets/bt-hardline.jpg',
        gamePrice: 'R$ 299,90',
        gameLabel: 'NEW',
        gameType: 'Digital PS5',
      },
      {
        gameCover: 'assets/ac-cover.jpg',
        gamePrice: 'R$ 299,90',
        gameLabel: 'BEST OF YEAR',
        gameType: 'Digital PS5',
      },
      {
        gameCover: 'assets/bt-bad-company-2.jpg',
        gamePrice: 'R$ 299,90',
        gameLabel: 'EXCLUSIVE',
        gameType: 'Digital PS5',
      },
    ]);
  }
}
