import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
// import { PaymentService } from '../payments/payment.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  handler: any;
  amount: 500;

  // In constructor
  // "private paymentSvc: PaymentService"
  constructor() { }

  ngOnInit() {
	  this.handler = StripeCheckout.configure({
		  key: environment.stripeKey,
		  image: "https://stripe.com/img/documentation/checkout/marketplace.png",
		  locale: "auto",
      token: token => {
        // this.paymentSvc.processPayment(token, this.amount)
      }
	  });
  }

  handlePayment(){
	  this.handler.open({
		  name: "Wheelhaus",
		  description: "Deposit Funds to Account",
		  amount: this.amount
	  });
  }

  @HostListener('window:popstate')
    onPopstate(){
      this.handler.close()
    }

}
