import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandComponent } from './land/land.component';
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
import { ApparelShowComponent } from './apparel/apparel-show/apparel-show.component';
import { BikeStoreNewComponent } from './bike-store/bike-store-new/bike-store-new.component';
import { BikeStoreShowComponent } from './bike-store/bike-store-show/bike-store-show.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BikeStoreComponent,
    LandComponent,
    NavbarComponent,
    FileSelectDirective,
    ApparelComponent,
    ApparelNewComponent,
    ApparelShowComponent,
    CartComponent,
    BikeStoreNewComponent,
    BikeStoreShowComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CommonModule,
    // AgmCoreModule.forRoot({
    //   libraries: ["places"],
    //   apiKey: 'AIzaSyD1ZzI7wCgzlk1_fe68Zp5w6kJ2ELedqMA'
    // }),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CartService, BikeStoreService, ApparelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
