import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
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
    // this.getEachCost(item);
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
          total_price += cart_items[i].price*cart_items[i].quantity;
        }
        this.amount = total_price;
        cart_items["totalcost"] = total_price;
      }
      this.shoppingCart = cart_items;
    })
    .catch()
  }

  // getEachCost(item){
  //   this._cartService.getEachCost(item)
  //   .then(each_item => {
  //     if(each_item.length == 1){
  //       each_item["eachcost"] = item.price;
  //     }
  //     else{
  //       var each_price = item.price;
  //       for(var i=0; i<each_item.length; i++){
  //         each_price += each_item[i].price*each_item[i].quantity;
  //       }
  //       this.individual_amt = each_price;
  //       each_item["eachcost"] = each_price;
  //     }
  //     this.individualCart = each_item;
  //   })
  //   .catch()

  // }

  removeItem(item){
    this._cartService.removeItem(item)
    .then(()=> {this.getCart(); this.updateCartCount();})
    .catch()
  }

  plusItem(item){
    this._cartService.minusItem(item)
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
