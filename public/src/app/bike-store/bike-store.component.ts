import { Component, OnInit } from '@angular/core';
import { BikeStoreService } from './bike-store.service';
import { CartService } from './../cart/cart.service';
import { RouterModule, Routes, Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bike-store',
  templateUrl: './bike-store.component.html',
  styleUrls: ['./bike-store.component.css']
})
export class BikeStoreComponent implements OnInit {
  apparel_id: String;
  apparel = {};
  bike_id: String;
  bike = {};
  
  // message: String = 'Added item to cart';
  // showMessage: Boolean = false;

  public _router: Router;
  public all_bikes: Array<any>;
  public item_type: String = 'bike';
  public apparels: Array<any>;
  public item_type2: String = 'apparel';

  constructor(
    private _route: ActivatedRoute,
    public _bikeService: BikeStoreService,
    public _cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllBikes();
    this.getAllApparel();

    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });

  }

  // For for-looping bike in DB on accessory page

  getAllBikes() {
    this._bikeService.getAllBikes()
      .then(bikes => {
      this.all_bikes = bikes;
      })
      .catch()
  }

  getAllApparel() {
    this._bikeService.getAllApparel()
      .then(apparel => { this.apparels = apparel; })
      .catch()
  }

  // CART FUNCTIONALITY

  addItem(id, type) {
    this._cartService.addItem(id, this.item_type)
      .then((success) => {
        this.updateCartCount();
        alert("Added to Cart");
      })
      .catch()
  }

  addItem2(id, type) {
    this._cartService.addItem(id, this.item_type2)
      .then((success) => {
        this.updateCartCount();
        alert("Added to Cart");
      })
      .catch()
  }

  updateCartCount() {
    this._cartService.updateCartCount("Updating Cart Count");
  }
}
