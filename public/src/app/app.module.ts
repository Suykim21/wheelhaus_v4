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
import { ApparelComponent } from './apparel/apparel.component';
import { AccessComponent } from './access/access.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

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
    AccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
