import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandComponent } from './land/land.component';
import { PaymentService } from './payments/payment.service';
<<<<<<< HEAD
import { DetailsComponent } from './events/details/details.component';
=======
import { FeaturedItemsComponent } from './featured-items/featured-items.component';
>>>>>>> d29aa69ad0845fe46bd3f67b14a8fcc1a46c4fed


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AboutComponent,
    BikeStoreComponent,
    LandComponent,
    NavbarComponent,
<<<<<<< HEAD
    DetailsComponent,
=======
    FeaturedItemsComponent,
>>>>>>> d29aa69ad0845fe46bd3f67b14a8fcc1a46c4fed
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // FlexLayoutModule,
    CommonModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
