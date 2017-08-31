import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class ApparelService {

  constructor(private _http: Http) { }

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

  showApparel(id){
    return this._http.get('/api/apparel/show/' + id)
    .map( (current_apparel: Response) => current_apparel.json())
    .toPromise() 
  }

  get3Apparels(){
    return this._http.get('/api/get3Apparels')
    .map(data => data.json())
    .toPromise()
  }

  getExpensiveApparel(){
    return this._http.get('/api/getExpensiveApparel')
    .map(data => data.json())
    .toPromise()
  }

  getCheapestApparel(){
    return this._http.get('/api/getCheapestApparel')
    .map(data => data.json())
    .toPromise()
  }

  getPopular(){
    return this._http.get('/api/getPopularApparel')
    .map(data => data.json())
    .toPromise()
  }

  getLimited(){
    return this._http.get('/api/getLimitedApparel')
    .map(data => data.json())
    .toPromise()
  }

  getCart(){
    return this._http.get('/api/getCart')
    .map(data => data.json())
    .toPromise()
  }

}
