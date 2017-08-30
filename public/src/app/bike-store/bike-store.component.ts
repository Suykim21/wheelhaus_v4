import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
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
  public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/bikeupload'});
  public file_name:any;
  public bike:any;
  public all_bikes:Array<any>;
  public _router: Router;
  public item_type: String = 'bike';

  constructor(
    public _bikeService: BikeStoreService,
    public _cartService: CartService
  ) { }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addBike();
    }
    this.getAllBikes();
  }

  // Upload images and adding to DB

    holdBikeDetails(bike){
      this.bike = bike.value;
    }

    addBike(){
      console.log("bike");
      this._bikeService.addBike(this.bike, this.file_name)
      .then()
      .catch()
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
      .then(bike => {this.all_bikes = bike; console.log(bike)})
      .catch()
    }

    getCheapest(){
      this._bikeService.getCheapestBikes()
      .then(bike => {this.all_bikes = bike; console.log(bike)})
      .catch()
    }

    mostPopular(){
      this._bikeService.getPopular()
      .then(bike => this.all_bikes = bike)
      .catch()
    }

    getLimited(){
      this._bikeService.getLimited()
      .then(bike => {this.all_bikes = bike; console.log(bike)})
      .catch()
    }
}
