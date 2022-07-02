import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoinComponent } from './components/card-coin/card-coin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardCoinComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardCoinComponent
  ]
})
export class SharedModule { }
