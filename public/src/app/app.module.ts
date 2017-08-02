import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { LandComponent } from './land/land.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeStoreComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
