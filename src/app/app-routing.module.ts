import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllocationComponent } from './allocation/allocation.component';
import { AssetAmountComponent } from './asset-amount/asset-amount.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { StrategyComponent } from './strategy/strategy.component';

const routes: Routes = [
  {path: '', redirectTo:'asset', pathMatch: 'full'},
  {path: 'asset', component: AssetAmountComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'instrument', component: InstrumentComponent},
  {path: 'allocation', component: AllocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
