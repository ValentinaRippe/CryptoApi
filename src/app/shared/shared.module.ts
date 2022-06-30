import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoinComponent } from './components/card-coin/card-coin.component';



@NgModule({
  declarations: [
    CardCoinComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardCoinComponent
  ]
})
export class SharedModule { }
