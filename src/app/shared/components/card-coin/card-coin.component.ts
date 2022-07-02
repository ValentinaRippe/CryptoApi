import { Component, Input, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins.service';
import { Coin } from '../../models/coin.model';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.sass']
})
export class CardCoinComponent implements OnInit {
  validImg: string = 'https://assets.coingecko.com/coins/images/5720/large/F1nTlw9I_400x400.jpg?1547041588'
  @Input() coin: Coin = {
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
  };
  constructor(private coinSvc: CoinsService) { }

  ngOnInit(): void {
    if(this.coin.image.large === undefined) {
      this.coin.image.large = this.validImg;
    }
  }
}
