import { Component, OnInit, HostListener, ElementRef, OnDestroy } from '@angular/core';
// import { PaymentService } from '../payments/payment.service';
import { environment } from '../../environments/environment';
import { CartService } from './../cart/cart.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  cart: number;
  handler: any;
  amount: number;
  subscription: Subscription;

  // In constructor
  // "private paymentSvc: PaymentService"
  constructor(
    public _cartService: CartService
  ) {
  }

  ngOnInit() {
    this._cartService.currentMessage.subscribe(success => this.getCartLength());
	  // this.handler = StripeCheckout.configure({
		//   key: environment.stripeKey,
		//   image: "https://stripe.com/img/documentation/checkout/marketplace.png",
		//   locale: "auto",
    //   token: token => {
    //     this.paymentSvc.processPayment(token, this.amount)
    //   }
	  // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    .then((cart)=> this.cart = cart.length )
    .catch()
  }

}
