import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinsService } from 'src/app/core/services/coins.service';
import { Coin } from 'src/app/shared/models/coin.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detail-coin',
  templateUrl: './detail-coin.component.html',
  styleUrls: ['./detail-coin.component.sass']
})
export class DetailCoinComponent implements OnInit {
  coin: Coin = {
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
  }
  idCoin!: string | null;

  constructor(private coinSvc: CoinsService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idCoin = paramMap.get('id')
    })
    this.coinSvc.getCoin(this.idCoin).subscribe((data: any) => {
      let { image } = data;
      this.coin = data;
      this.coin.image = image;
      console.log(data)
    }
    )
  }

  convertStringToHTML(str: string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  back(): void {
    this.location.back()
  }

}
