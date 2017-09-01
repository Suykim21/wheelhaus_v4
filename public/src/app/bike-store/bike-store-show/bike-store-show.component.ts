import { CartService } from './../../cart/cart.service';
import { BikeStoreService } from './../bike-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-store-show',
  templateUrl: './bike-store-show.component.html',
  styleUrls: [
    './bike-store-show.component.desktop.css',
    './bike-store-show.component.mobile.css',
    './bike-store-show.component.tablet.css',
  ]
})
export class BikeStoreShowComponent implements OnInit {
  bike_id: String;
  bike = {};
  item_type: String = 'bike'
  message: String = 'Added item to cart';
  showMessage: Boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _bikeService: BikeStoreService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.bike_id = param.id;
    })
    this.showBike(this.bike_id);
  }

  showBike(id){
    this._bikeService.showBike(id)
    .then(current_bike => this.bike = current_bike)
    .catch()
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
