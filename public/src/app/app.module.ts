import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandComponent } from './land/land.component';
import { PaymentService } from './payments/payment.service';
import { FeaturedItemsComponent } from './src/app/featured-items/featured-items.component';


@NgModule({
  declarations: [
    AppComponent,
    BikeStoreComponent,
    LandComponent,
    NavbarComponent,
    FeaturedItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
