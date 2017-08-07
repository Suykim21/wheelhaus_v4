import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../navbar/navbar.component';
import { PaymentService } from '../payment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
