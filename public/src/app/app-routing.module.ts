import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventsNewComponent } from './events/events-new/events-new.component';
import { DetailsComponent } from './events/details/details.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccessoriesComponent } from './accessories/accessories.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { BikeStoreNewComponent } from './bike-store/bike-store-new/bike-store-new.component';
import { AccessComponent } from './access/access.component';
import { AccessoriesNewComponent } from './accessories/accessories-new/accessories-new.component';
import { CartComponent } from './cart/cart.component';
import { ApparelComponent } from "./apparel/apparel.component";
import { ApparelShowComponent } from './apparel/apparel-show/apparel-show.component';
import { ApparelNewComponent } from './apparel/apparel-new/apparel-new.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'events/new', component: EventsNewComponent},
  {path: 'events/:id', component: DetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: LandComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'apparel/new', component: ApparelNewComponent},
  {path: 'apparel/show/:id', component: ApparelShowComponent},
  {path: 'bikes', component: BikeStoreComponent},
  {path: 'bikes/new', component: BikeStoreNewComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'accessories/new', component: AccessoriesNewComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
