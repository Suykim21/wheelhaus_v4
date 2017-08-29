import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AccessoriesService {

  constructor(
    private _http: Http
  ) { }

  addAccessory(accessory, path){
    path = path.substr(1).slice(0, -1);
    accessory["path"] = path;
    return this._http.post('/api/addAccessory', accessory)
    .map(data => data.json())
    .toPromise();
  }

  getAllAccessories(){
    return this._http.get('/api/getAllAccessories')
    .map(data => data.json())
    .toPromise();
  }

  getExpensiveAccessories(){
    return this._http.get('/api/getExpensiveAccessories')
    .map(data => data.json())
    .toPromise()
  }

  getCheapestAccessories(){
    return this._http.get('/api/getCheapestAccessories')
    .map(data => data.json())
    .toPromise()
  }

  getPopular(){
    return this._http.get('/api/getPopularAccessories')
    .map(data => data.json())
    .toPromise()
  }

  getLimited(){
    return this._http.get('/api/getLimitedAccesories')
    .map(data => data.json())
    .toPromise()
  }

  getCart(){
    return this._http.get('/api/getCart')
    .map(data => data.json())
    .toPromise()
  }
  
}
