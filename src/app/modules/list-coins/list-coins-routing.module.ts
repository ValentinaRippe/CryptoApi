import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoinsComponent } from './page/list-coins.component';

const routes: Routes = [{ path: '', component: ListCoinsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCoinsRoutingModule { }
