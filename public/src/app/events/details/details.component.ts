import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormControl } from '@angular/forms';
// import { MapsAPILoader } from '@agm/core';
import { DetailsService } from './details.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  } from 'googlemaps';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  public searchControl: FormControl;
  public zoom: number;
  public event: any;
  public event_id: String;
  public other_events: any;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    // private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private _detailService: DetailsService,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    var address = event;
    // var geocoder = new google.maps.Geocoder();
    // geocoder.geocode( { 'address': address}, function(results, status) {
    //   if (status == google.maps.GeocoderStatus.OK)
    //   {
    //       // do something with the geocoded result
    //       //
    //       // results[0].geometry.location.latitude
    //       // results[0].geometry.location.longitude
    //   }
    // });

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
      // console.log(this.event);
    })
    .catch()
  }

// This will grab all events from DB,
// remove the event that is being shown on show page,
// and shuffling the events to be used on OTHER EVENTS
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
