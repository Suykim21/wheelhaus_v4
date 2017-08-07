import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'about', component: AboutComponent},
  {
    path: '', component: LandComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
