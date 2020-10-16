import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetAmountComponent } from './asset-amount/asset-amount.component';
import { StrategyComponent } from './strategy/strategy.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { AllocationComponent } from './allocation/allocation.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetAmountComponent,
    StrategyComponent,
    InstrumentComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
