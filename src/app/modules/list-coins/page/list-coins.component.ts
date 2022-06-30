import { Component, OnInit } from '@angular/core';
import { CoinsService } from 'src/app/core/services/coins.service';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.sass']
})
export class ListCoinsComponent implements OnInit {

  constructor(private coinsSvc: CoinsService) { }
  coins!: {};

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(cur: number = 0) {
    this.coinsSvc.getCoins().subscribe((data) => {
      //
      this.coins = data;
    }
    )
  }

}
