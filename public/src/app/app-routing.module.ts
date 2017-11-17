import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { BikeStoreNewComponent } from './bike-store/bike-store-new/bike-store-new.component';
import { BikeStoreShowComponent } from './bike-store/bike-store-show/bike-store-show.component';
import { CartComponent } from './cart/cart.component';
import { ApparelComponent } from "./apparel/apparel.component";
import { ApparelShowComponent } from './apparel/apparel-show/apparel-show.component';
import { ApparelNewComponent } from './apparel/apparel-new/apparel-new.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: LandComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'apparel/new', component: ApparelNewComponent},
  {path: 'apparel/show/:id', component: ApparelShowComponent},
  {path: 'bikes', component: BikeStoreComponent},
  {path: 'bikes/new', component: BikeStoreNewComponent},
  {path: 'bikes/show/:id', component: BikeStoreShowComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
