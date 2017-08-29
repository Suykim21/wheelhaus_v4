import { Component, OnInit} from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
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
    public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/accessoryupload'});
    public file_name:any;
    public accessory:any;
    public all_accessories:Array<any>;
    public _router: Router;
    public item_type: String = 'accessory';

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addAccessory();
    }
    this.getAllAccessories();
	}

	constructor(
    public _accessoryService: AccessoriesService,
    public _cartService: CartService
  ) {}

// Upload images and adding to DB

  holdAccessoryDetails(accessory){
    this.accessory = accessory.value;
  }

  addAccessory(){
    this._accessoryService.addAccessory(this.accessory, this.file_name)
    .then()
    .catch()
  }

// For for-looping accessories in DB on accessory page

  getAllAccessories(){
    this._accessoryService.getAllAccessories()
    .then(accessories => { this.all_accessories = accessories;
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
    this._accessoryService.getExpensiveAccessories()
    .then(accessories => {this.all_accessories = accessories; console.log(accessories)})
    .catch()
  }

  getCheapest(){
    this._accessoryService.getCheapestAccessories()
    .then(accessories => {this.all_accessories = accessories; console.log(accessories)})
    .catch()
  }

  mostPopular(){
    this._accessoryService.getPopular()
    .then(accessories => this.all_accessories = accessories)
    .catch()
  }

  getLimited(){
    this._accessoryService.getLimited()
    .then(accessories => {this.all_accessories = accessories; console.log(accessories)})
    .catch()
  }
}
