import { Component, OnInit } from '@angular/core';
import { BikeStoreService } from './bike-store.service';
import { CartService } from './../cart/cart.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-bike-store',
  templateUrl: './bike-store.component.html',
  styleUrls: ['./bike-store.component.mobile.css',
              './bike-store.component.tablet.css',
              './bike-store.component.desktop.css']
})
export class BikeStoreComponent implements OnInit {
  public all_bikes:Array<any>;
  public _router: Router;
  public item_type: String = 'bike';

  constructor(
    public _bikeService: BikeStoreService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this.getAllBikes();
  }

  // For for-looping bike in DB on accessory page

    getAllBikes(){
      this._bikeService.getAllBikes()
      .then(bikes => { this.all_bikes = bikes;
      })
      .catch()
    }

  // CART FUNCTIONALITY

    addItem(id, type){
      this._cartService.addItem(id, this.item_type)
      .then((success) => {
        this.updateCartCount();
    })
      .catch()
    }

    updateCartCount(){
      this._cartService.updateCartCount("Updating Cart Count");
    }

  // FILTERS

    getExpensive(){
      this._bikeService.getExpensiveBikes()
      .then(bike => this.all_bikes = bike)
      .catch()
    }

    getCheapest(){
      this._bikeService.getCheapestBikes()
      .then(bike => this.all_bikes = bike)
      .catch()
    }

    mostPopular(){
      this._bikeService.getPopular()
      .then(bike => this.all_bikes = bike)
      .catch()
    }

    getLimited(){
      this._bikeService.getLimited()
      .then(bike => this.all_bikes = bike)
      .catch()
    }
}
