import { ApparelService } from './apparel.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart/cart.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.mobile.css',
              './apparel.component.tablet.css',
              './apparel.component.desktop.css']
})
export class ApparelComponent implements OnInit {
  public _router: Router;
  public apparel: Array<any>;
  public item_type: String = 'apparel';

  apparels: Array<any>

  constructor(
    public _apparelService: ApparelService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this.getAllApparel();
  }

  getAllApparel(){
    this._apparelService.getAllApparel()
    .then(apparel => { this.apparels = apparel;})
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
    this._apparelService.getExpensiveApparel()
    .then(all_apparel => this.apparels = all_apparel)
    .catch()
  }

  getCheapest(){
    this._apparelService.getCheapestApparel()
    .then(all_apparel => this.apparels = all_apparel)
    .catch()
  }

  mostPopular(){
    this._apparelService.getPopular()
    .then(all_apparel => this.apparels = all_apparel)
    .catch()
  }

  getLimited(){
    this._apparelService.getLimited()
    .then(all_apparel => this.apparel = all_apparel)
    .catch()
  }
}
