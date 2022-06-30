import { Component, Input, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins.service';
import { Coin } from '../../models/coin.model';

@Component({
  selector: 'app-card-coin',
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.sass']
})
export class CardCoinComponent implements OnInit {
  @Input() coin!: Coin;
  constructor(private coinSvc: CoinsService) { }

  ngOnInit(): void {
    this.coinSvc.getCoin(this.coin.id).subscribe((data:any) => {
      console.log(data)
      let {image} = data;
      this.coin.image = image;
    }
    )
  }

}
