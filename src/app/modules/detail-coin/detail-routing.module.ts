import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCoinComponent } from './page/detail-coin.component';

const routes: Routes = [{ path: '', component: DetailCoinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
