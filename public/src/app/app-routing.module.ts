import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './events/details/details.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { ApparelComponent } from "./apparel/apparel.component";
import { AccessoriesComponent } from './accessories/accessories.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';
import { AccessComponent } from './access/access.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: DetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: '', component: LandComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'bikes', component: BikeStoreComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
