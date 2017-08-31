import { CartService } from './../../cart/cart.service';
import { AccessoriesService } from './../accessories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories-show',
  templateUrl: './accessories-show.component.html',
  styleUrls: [
    './accessories-show.component.desktop.css',
    './accessories-show.component.mobile.css',
    './accessories-show.component.tablet.css'
  ]
})
export class AccessoriesShowComponent implements OnInit {
  accessory_id: String;
  accessory = {};
  item_type: String = 'accessory'

  constructor(
    private _route: ActivatedRoute,
    private _accessoriesService: AccessoriesService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.accessory_id = param.id;
    })
    this.showAccessory(this.accessory_id);
  }

  showAccessory(id){
    this._accessoriesService.showAccessory(id)
    .then(current_accessory => this.accessory = current_accessory)
    .catch(err => console.log(err))
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

}
