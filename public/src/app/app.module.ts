import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandComponent } from './land/land.component';
import { PaymentService } from './payments/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AboutComponent,
    BikeStoreComponent,
    LandComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CommonModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
