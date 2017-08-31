import { Component, OnInit, Directive, Renderer, HostListener, HostBinding, ElementRef, NgModule, Input, Output, EventEmitter } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import { BikeStoreService } from './../bike-store/bike-store.service';
import { AccessoriesService } from './../accessories/accessories.service';
// import { ApparelService } from './../apparel/apparel.service';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.mobile.css',
              './land.component.tablet.css',
              './land.component.desktop.css'],
  // animations: [
  //   trigger('dataState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active',   style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
})
export class LandComponent implements OnInit {

  accessories: any;
  bikes: any;
  // apparel: any;
  scrollCount: number;

  constructor(
    public _accessoryService: AccessoriesService,
    public _bikestoreService: BikeStoreService,
    // public _apparelService: ApparelService
  ) { }

  ngOnInit() {
    this.getAccessories();
    this.getBikes();
    // this.getApparel();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  }

  getAccessories(){
    this._accessoryService.get3Accessories()
    .then((accessories) => this.accessories = accessories)
    .catch()
    }

  getBikes(){
    this._bikestoreService.get3Bikes()
    .then((bikes) => this.bikes = bikes)
    .catch()
  }
}
