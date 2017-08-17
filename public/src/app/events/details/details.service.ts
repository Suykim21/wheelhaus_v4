import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class DetailsService {

  constructor(
    private _http: Http
  ) { }

  getEvent(event_id){
    return this._http.get("/api/getEvent/" + event_id)
    .map(data => data.json())
    .toPromise()
  }

  getOtherEvents(){
    return this._http.get("/api/getAllEvents")
    .map(data => data.json())
    .toPromise()
  }
}
