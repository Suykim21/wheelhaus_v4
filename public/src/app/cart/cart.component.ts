import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private shoppingCart: any;

  constructor(
    private _cartService: CartService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCart()
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
        cart_items["totalcost"] = total_price;
      }
      this.shoppingCart = cart_items;
      console.log(cart_items);
    })
    .catch()
  }

  updateCart(a){
    console.log(a.value);
  }

  removeItem(item){
    this._cartService.removeItem(item)
    .then(()=>this._router.navigate['/cart'])
    .catch()
  }

}
