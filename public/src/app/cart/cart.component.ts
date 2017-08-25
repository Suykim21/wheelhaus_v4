import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.mobile.css',
              './cart.component.tablet.css',
              './cart.component.desktop.css']
})
export class CartComponent implements OnInit {

  handler: any;
  amount: number;

  private shoppingCart: any;

  constructor(
    private _cartService: CartService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCart();
    this.handler = StripeCheckout.configure({
		  key: environment.stripeKey,
		  image: "https://stripe.com/img/documentation/checkout/marketplace.png",
		  locale: "auto",
      token: token => {
        // this.paymentSvc.processPayment(token, this.amount)
      }
	  });
  }

  getCart(){
    this._cartService.getCart()
    .then(cart_items => {
      if(cart_items.length == 0){
        cart_items["totalcost"] = 0;
      }else{
        var total_price = 0;
        for(var i = 0; i < cart_items.length; i++){
          total_price += cart_items[i].cost*cart_items[i].qty;
        }
        this.amount = total_price;
        cart_items["totalcost"] = total_price;
      }
      this.shoppingCart = cart_items;
    })
    .catch()
  }

  removeItem(item){
    this._cartService.removeItem(item)
    .then(()=> this.getCart())
    .catch()
  }

  clearCart(){
    this._cartService.clearCart()
    .then(()=> this.getCart())
    .catch()
  }

  handlePayment(){
	  this.handler.open({
		  name: "Wheelhaus",
		  description: "Deposit Funds to Account",
		  amount: this.amount
	  });
  }

}
