import { ApparelService } from './apparel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.mobile.css',
              './apparel.component.tablet.css',
              './apparel.component.desktop.css']
})
export class ApparelComponent implements OnInit {
  apparels: Array<any>

  constructor(
    public _apparelService: ApparelService
  ) { }

  ngOnInit() {
    this.getAllApparel();
  }

  getAllApparel(){
    this._apparelService.getAllApparel()
    .then(all_apparel => { this.apparels = all_apparel;})
    .catch()
  }

}
