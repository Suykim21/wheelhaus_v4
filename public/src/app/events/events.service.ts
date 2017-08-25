import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class EventsService {

  constructor(
    private _http: Http
  ) { }

  addEvent(event, path){
    console.log("ADDDING EVENT FROM SERVICE!!!!!!")
    path = path.substr(1).slice(0, -1);
    event["path"] = path;
    var address = {
      street: event.street,
      city: event.city,
      state: event.state,
      zipcode: event.zipcode
    }
    event["address"] = address;
    delete event['street'];
    delete event['city'];
    delete event['state'];
    delete event['zipcode'];
    console.log(event);
    return this._http.post('/addEvent', event)
    .map(data => data.json())
    .toPromise();
  }

  getAllEvents(){
    return this._http.get('/api/getAllEvents')
    .map(data => data.json())
    .toPromise();
  }
}
