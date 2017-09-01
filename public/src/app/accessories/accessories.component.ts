import { Component, OnInit} from '@angular/core';
import { AccessoriesService } from './accessories.service';
import { CartService } from './../cart/cart.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.mobile.css',
              './accessories.component.tablet.css',
              './accessories.component.desktop.css']
})
export class AccessoriesComponent implements OnInit {
    public all_accessories:Array<any>;
    public _router: Router;
    public item_type: String = 'accessory';

  ngOnInit() {
    this.getAllAccessories();
	}

	constructor(
    public _accessoryService: AccessoriesService,
    public _cartService: CartService
  ) {}


// For for-looping accessories in DB on accessory page

  getAllAccessories(){
    this._accessoryService.getAllAccessories()
    .then(accessories => { this.all_accessories = accessories;
    })
    .catch()
  }

// FILTERS

  getExpensive(){
    this._accessoryService.getExpensiveAccessories()
    .then(accessories => this.all_accessories = accessories)
    .catch()
  }

  getCheapest(){
    // console.log(this.all_accessories[0].price);
    for(var i = 0 ; i < this.all_accessories.length-1; i++){
      for(var j = i+1 ; this.all_accessories.length - 1; j++){
        console.log(this.all_accessories[j].price);
        // if(this.all_accessories[i].price > this.all_accessories[j].price){
        //   var temp = this.all_accessories[i];
        //   this.all_accessories[i] = this.all_accessories[j];
        //   this.all_accessories[j] = temp;
        // }
      }
    }
    // console.log(this.all_accessories);
    // this._accessoryService.getCheapestAccessories()
    // .then(accessories => console.log(accessories))
    // .catch()
  }

  mostPopular(){
    this._accessoryService.getPopular()
    .then(accessories => this.all_accessories = accessories)
    .catch()
  }

  getLimited(){
    this._accessoryService.getLimited()
    .then(accessories => this.all_accessories = accessories)
    .catch()
  }
}
