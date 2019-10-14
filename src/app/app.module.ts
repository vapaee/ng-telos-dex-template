import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VapaeeScatterModule, VapaeeScatter } from '@vapaee/scatter';
import { VapaeeDexModule, VapaeeDEX } from '@vapaee/dex';
import { HomePage } from './pages/home/home.page';
import { RootPage } from './pages/root/root.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    RootPage,
    NotFoundPage
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
