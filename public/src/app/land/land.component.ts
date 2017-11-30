import { Component, OnInit, Directive, Renderer, HostListener, HostBinding, ElementRef, NgModule, Input, Output, EventEmitter } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
// import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css'],
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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  }
}
