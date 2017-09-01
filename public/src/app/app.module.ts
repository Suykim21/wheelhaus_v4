import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { DetailsComponent } from './events/details/details.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { EventsService } from './events/events.service';
import { DetailsService } from './events/details/details.service';
import { AccessoriesService } from './accessories/accessories.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ApparelComponent } from './apparel/apparel.component';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { BikeStoreService } from './bike-store/bike-store.service';
import { ApparelService } from './apparel/apparel.service';
import { ApparelNewComponent } from './apparel/apparel-new/apparel-new.component';
import { ApparelDestroyComponent } from './apparel/apparel-destroy/apparel-destroy.component';
import { ApparelShowComponent } from './apparel/apparel-show/apparel-show.component';
import { AccessoriesNewComponent } from './accessories/accessories-new/accessories-new.component';
import { EventsNewComponent } from './events/events-new/events-new.component';
import { BikeStoreNewComponent } from './bike-store/bike-store-new/bike-store-new.component';
import { AccessoriesShowComponent } from './accessories/accessories-show/accessories-show.component';
import { BikeStoreShowComponent } from './bike-store/bike-store-show/bike-store-show.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AboutComponent,
    BikeStoreComponent,
    LandComponent,
    NavbarComponent,
    DetailsComponent,
    AccessoriesComponent,
    FileSelectDirective,
    ApparelComponent,
    ApparelNewComponent,
    ApparelShowComponent,
    ApparelDestroyComponent,
    CartComponent,
    AccessoriesNewComponent,
    EventsNewComponent,
    BikeStoreNewComponent,
    AccessoriesShowComponent,
    BikeStoreShowComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CommonModule,
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyD1ZzI7wCgzlk1_fe68Zp5w6kJ2ELedqMA'
    }),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AccessoriesService, EventsService, DetailsService, CartService, BikeStoreService, ApparelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
