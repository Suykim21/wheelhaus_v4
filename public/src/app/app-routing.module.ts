import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './events/details/details.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AccessoriesComponent } from './accessories/accessories.component';
import { BikeStoreComponent } from './bike-store/bike-store.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'events', component: EventsComponent}, 
  {path: 'events/details', component: DetailsComponent},
=======
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: DetailsComponent},
>>>>>>> d2749db091f4e8b51aa1f120041d1b20c91faf46
  {path: 'about', component: AboutComponent},
  {path: '', component: LandComponent},
  {path: 'bikes', component: BikeStoreComponent},
  {path: 'accessories', component: AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
