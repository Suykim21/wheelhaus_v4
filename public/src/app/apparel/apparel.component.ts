import { ApparelService } from './apparel.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart/cart.service';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css']
})
export class ApparelComponent implements OnInit {
  public _router: Router;
  public apparel: Array<any>;
  public item_type: String = 'apparel';

  apparels: Array<any>

  constructor(
    public _apparelService: ApparelService,
    public _cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllApparel();

    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });
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
}
