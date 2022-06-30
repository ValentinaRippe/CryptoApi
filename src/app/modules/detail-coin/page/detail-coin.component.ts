import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinsService } from 'src/app/core/services/coins.service';
import { Coin } from 'src/app/shared/models/coin.model';

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
    price: '',
    decription: '',
    coingecko_rank: '',
    coingecko_score: ''
  }
  idCoin!: string | null;

  constructor(private coinSvc: CoinsService, private route: ActivatedRoute) { }

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

}
