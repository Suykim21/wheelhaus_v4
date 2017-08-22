import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
// import { PaymentService } from '../payments/payment.service';
import { environment } from '../../environments/environment';
import { CartService } from './../cart/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: number;
  handler: any;
  amount: 500;

  // In constructor
  // "private paymentSvc: PaymentService"
  constructor(
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this.getCartLength();
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

  openSideMenu() {
    document.getElementById('side-menu').style.width = '250px'
  }

  closeSideMenu() {
    document.getElementById('side-menu').style.width = '0'
  }

  @HostListener('window:popstate')
    onPopstate(){
      this.handler.close()
    }

  getCartLength(){
    this._cartService.getCart()
    .then((cart)=>{this.cart = cart.length ; console.log(cart.length)})
    .catch()
  }

}
