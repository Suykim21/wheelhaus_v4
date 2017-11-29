import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import{ BikeStoreService } from './../bike-store/bike-store.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}),{optional: true})
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {
  showMessage: Boolean = false;
  message: String ="Successfully Sent"
  showMessage2: Boolean = false;
  error: String ="One or more information need to be filled out completely"

  constructor(private _bikeStoreService: BikeStoreService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0,0)
    });
  }

  addInfo(formData){
    // console.log(formData.value);
    this._bikeStoreService.addInfo(formData.value)
    // .then takes in a callback with one argument. The data response from server 
      .then((response) => {console.log(response); this.showMessage = true; setTimeout(()=> this.showMessage = false, 4000)
      })
      .catch((err) => {console.log(err); this.showMessage2=true; setTimeout(()=> this.showMessage2 = false, 4000)})
    
    formData.reset();

  }

}