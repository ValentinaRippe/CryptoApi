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
  load: boolean = true;
  coins: Coin[] = [{
    id: '',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: {
      large: '',
      small: '',
      thumb: ''
    },
    market_data: {
      current_price: {
        usd: 0
      },
      price_change_24h: 0,
      total_volume: {
        usd: 0
      },
    },
    description: {
      en: '',
    },
    coingecko_rank: '',
    coingecko_score: '',
    links: {
      homepage: [''],
      blockchain: ['']
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
    this.currentPages === 0 ? this.buttonPages.prev = false : this.buttonPages.prev = true;
    this.coinsSvc.getCoins().subscribe((data: any) => {
      let sortCoins = data.sort((a:any, b:any) => {
        return (a.identifierCompetences > b.identifierCompetences)
         ? -1 : 1
      })
      sortCoins.slice(cur, cur + 10).map(
        (coin: Coin) => {
          this.coinsSvc.getCoin(coin.id).subscribe((data: any) => {
            let infoCoins = data;
            setTimeout(() => {
              this.coins.push(infoCoins);
              this.load = false;
            }, 1500);
          })
        })
    })
  }

  next = () => {
    if (this.coins.length > 1) {
      this.load = true;
      this.coins = []
      this.getCoins(this.currentPages += 20)
    }

  };

  prev = () => {
    if (this.currentPages > 0) {
      this.load = true;
      this.coins = []
      this.getCoins(this.currentPages -= 20)
    }
  };


}
