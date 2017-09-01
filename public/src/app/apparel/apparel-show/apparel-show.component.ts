import { ApparelService } from './../apparel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './../../cart/cart.service';

@Component({
  selector: 'app-apparel-show',
  templateUrl: './apparel-show.component.html',
  styleUrls: [
    './apparel-show.component.desktop.css',
    './apparel-show.component.mobile.css',
    './apparel-show.component.tablet.css'
  ]
})
export class ApparelShowComponent implements OnInit {
  apparel_id: String;
  apparel = {};
  item_type: String = 'apparel'
  message: String = 'Added item to cart';
  showMessage: Boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _apparelService: ApparelService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.apparel_id = param.id;
    })
    this.showApparel(this.apparel_id);
  }

  showApparel(id){
    this._apparelService.showApparel(id)
    .then(current_apparel => this.apparel = current_apparel)
    .catch(err => console.log(err))
  }

// CART FUNCTIONALITY
  addItem(id, type){
    this._cartService.addItem(id, this.item_type)
    .then((success) => {
      this.updateCartCount();
      this.showMessage = true;
      setTimeout(() => this.showMessage = false, 4000);
  })
    .catch()
  }

  updateCartCount(){
    this._cartService.updateCartCount("Updating Cart Count");
  }

}
