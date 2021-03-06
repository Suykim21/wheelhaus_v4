import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  handler: any;
  amount: number;

  public shoppingCart: any;

  constructor(
    private _cartService: CartService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log(this);
    this.getCart();
    // this.getEachCost(item);
    this.handler = StripeCheckout.configure({
		  key: environment.stripeKey,
		  image: "https://stripe.com/img/documentation/checkout/marketplace.png",
		  locale: "auto",
      token: token => {
        // this.paymentSvc.processPayment(token, this.amount)
      }
    });
    this._router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });
  }

  getCart(){
    this._cartService.getCart()
    .then(cart_items => {
      // console.log(cart_items);
      if(cart_items.length == 0){
        cart_items["totalcost"] = 0;
        cart_items["totalqty"] = 0;
        // console.log()
      }else{
        var total_price = 0;
        var total_qty = 0
        for(var i = 0; i < cart_items.length; i++){
          total_price += cart_items[i].price*cart_items[i].quantity;
          // this will add all qty of items so that you can use it as a total in the front
          total_qty += cart_items[i].quantity;
        }
        this.amount = total_price;
        cart_items["totalcost"] = total_price;
        cart_items["totalqty"] = total_qty;
      }
      this.shoppingCart = cart_items;
      // console.log(this.shoppingCart);
    })
    .catch()
  }

  removeItem(item){
    this._cartService.removeItem(item)
    .then(()=> {this.getCart(); this.updateCartCount();})
    .catch()
  }

  plusItem(item){
    this._cartService.plusItem(item)
    .then(()=>{this.getCart(); this.updateCartCount();})
    .catch()
  }

  minusItem(item){
    this._cartService.minusItem(item)
    .then(()=>{this.getCart(); this.updateCartCount();})
    .catch()
  }

  clearCart(){
    this._cartService.clearCart()
    .then(()=> {this.getCart(); this.updateCartCount();})
    .catch()
  }

  updateCartCount(){
    this._cartService.updateCartCount("Updating Cart Count");
  }

  handlePayment(){
	  this.handler.open({
		  name: "Wheelhaus",
		  description: "Deposit Funds to Account",
		  amount: this.amount*100
	  });
  }

}
