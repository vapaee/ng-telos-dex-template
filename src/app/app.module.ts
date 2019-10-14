import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VapaeeScatterModule, VapaeeScatter } from '@vapaee/scatter';
import { VapaeeDexModule, VapaeeDEX } from '@vapaee/dex';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VapaeeScatterModule,
    VapaeeDexModule,
  ],
  providers: [
    VapaeeScatter,
    VapaeeDEX
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
