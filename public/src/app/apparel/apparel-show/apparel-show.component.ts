import { ApparelService } from './../apparel.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apparel-show',
  templateUrl: './apparel-show.component.html',
  styleUrls: ['./apparel-show.component.css']
})
export class ApparelShowComponent implements OnInit {
  apparel_id: String;
  apparel = {};

  constructor(
    private _route: ActivatedRoute,
    private _apparelService: ApparelService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.apparel_id = param.id;
    })
    this.showApparel(this.apparel_id);
  }

  showApparel(id){
    this._apparelService.showApparel(id)
    .then( current_apparel => this.apparel = current_apparel)
    .catch( err => console.log(err))
  }

}
