import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class BikeStoreService {

  constructor(
    private _http: Http
  ) { }

  addBike(bike, path){
    path = path.substr(1).slice(0, -1);
    bike["image"] = path;
    return this._http.post('/api/addBike', bike)
    .map(data => data.json())
    .toPromise();
  }

  getAllBikes(){
    return this._http.get('/api/getAllBikes')
    .map(data => data.json())
    .toPromise();
  }

  // addInfo(data){

  // }

  // showBike(id){
  //   return this._http.get('/api/bikes/show/' + id)
  //   .map( (current_bike: Response) => current_bike.json())
  //   .toPromise() 
  // }
  
  getCart(){
    return this._http.get('/api/getCart')
    .map(data => data.json())
    .toPromise()
  }

  addApparel(apparel, path){
    path = path.substr(1).slice(0, -1);
    apparel["path"] = path;
    return this._http.post('/api/addapparel', apparel)
    .map( (questions: Response) => questions.json()).toPromise()
  }

  getAllApparel(){
    return this._http.get('/api/allapparel')
    .map(data => data.json()).toPromise();
  }

  // showApparel(id){
  //   return this._http.get('/api/apparel/show/' + id)
  //   .map( (current_apparel: Response) => current_apparel.json())
  //   .toPromise()
  // }

}
