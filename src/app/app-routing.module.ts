import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'detail-coin',
    loadChildren: () =>
      import('./modules/detail-coin/detail-coin.module').then((m) => m.DetailCoinModule)
  },
  {
    path: 'list-coins',
    loadChildren: () =>
      import('./modules/list-coins/list-coins.module').then((m) => m.ListCoinsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
