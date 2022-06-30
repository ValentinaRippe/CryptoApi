import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins.service';
import { Coin } from 'src/app/shared/models/coin.model';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.sass']
})
export class ListCoinsComponent implements OnInit {

  constructor(private coinsSvc: CoinsService) { }
  coins: Coin[] = [{
    id: '',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: {
      large: '',
      small: '',
      thumb: ''
    }
  }];

  buttonPages = {
    prev: true,
    next: true,
  }
  currentPages = 0;

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(cur: number = 0) {
    this.coinsSvc.getCoins().subscribe((data:any) => {
      //
      let infoCoins = data;
      this.coins = infoCoins.slice( cur, cur + 20)
    }
    )
  }

  next = () => {
    this.coins = []
    this.getCoins( this.currentPages += 20)
  };

  prev = () => {
    if (this.currentPages > 0) {
      this.buttonPages.prev = false
      this.coins = []
      this.getCoins( this.currentPages -= 20)
    }
  };


}
