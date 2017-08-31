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

  showBike(id){
    return this._http.get('/api/bikes/show/' + id)
    .map( (current_bike: Response) => current_bike.json())
    .toPromise() 
  }

  get3Bikes(){
    return this._http.get('/api/get3Bikes')
    .map(data => data.json())
    .toPromise()
  }

  getExpensiveBikes(){
    return this._http.get('/api/getExpensiveBikes')
    .map(data => data.json())
    .toPromise()
  }

  getCheapestBikes(){
    return this._http.get('/api/getCheapestBikes')
    .map(data => data.json())
    .toPromise()
  }

  getPopular(){
    return this._http.get('/api/getPopularBikes')
    .map(data => data.json())
    .toPromise()
  }

  getLimited(){
    return this._http.get('/api/getLimitedBikes')
    .map(data => data.json())
    .toPromise()
  }

  getCart(){
    return this._http.get('/api/getCart')
    .map(data => data.json())
    .toPromise()
  }

}
