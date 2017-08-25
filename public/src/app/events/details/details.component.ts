import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { DetailsService } from './details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MapsAPILoader} from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lat: number;
  lng: number;
  public event: any;
  public event_id: String;
  public other_events: any;
  public event_address: any;
  public geocoder;

  constructor(
    private _detailService: DetailsService,
    private _activateRoute: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader
  ){}


  ngOnInit() {
    this._activateRoute.params.subscribe((param)=>{
      this.event_id = param.id;
    })
    this.getEvent(this.event_id);
    this.getOtherEvents();
  }

  getEvent(event_id){
    this._detailService.getEvent(event_id)
    .then(event => {
      this.event = event;
      this.event_address = event.address.street + event.address.city + ", " + event.address.state + " " + event.address.zipcode;
      console.log(this.event_address);
      this.mapsAPILoader.load().then(() => {
        console.log('google script loaded');
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({ 'address': this.event_address }, (results, status) => {
          console.log(results);
          console.log(status);
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          // console.log("lat: " + latitude + ", long: " + longitude);
        });
      });
    })
    .catch()
  }

// This will grab all events from DB,
// remove the event that is being shown on show page,
// and shuffe the events to be used on OTHER EVENTS
  getOtherEvents(){
    this._detailService.getOtherEvents()
    .then( other_events => {
      this.other_events = other_events;
      var this_event = this.event;
      function shuffle (array, event) {
        var i = 0
          , j = 0
          , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
          if(array[i] == event){
            array.slice(i);
          }
          j = Math.floor(Math.random() * (i + 1))
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        return array;
      }
      this.other_events = shuffle(this.other_events, this.event);
      // console.log(this.other_events);
    })
    .catch()
  }
}
