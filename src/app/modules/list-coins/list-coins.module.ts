import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoinsRoutingModule } from './list-coins-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListCoinsComponent } from './page/list-coins.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ListCoinsComponent
  ],
  imports: [
    CommonModule,
    ListCoinsRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class ListCoinsModule { }
