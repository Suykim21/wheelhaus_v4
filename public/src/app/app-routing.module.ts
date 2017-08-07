import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandComponent } from './land/land.component';
import { NavbarComponent } from "./navbar/navbar.component"

const routes: Routes = [
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
