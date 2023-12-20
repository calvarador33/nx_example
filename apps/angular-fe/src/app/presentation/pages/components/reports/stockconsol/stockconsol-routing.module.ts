import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockconsolComponent } from './stockconsol.component';

const routes: Routes = [
  { path: '', component: StockconsolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockconsolRoutingModule { }
