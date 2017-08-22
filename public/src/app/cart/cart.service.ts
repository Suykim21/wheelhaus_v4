import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CartService {

  constructor(
    private _http: Http
  ) { }

  getCart(){
    return this._http.get("/api/getCart")
    .map(data => data.json())
    .toPromise()
  }

  removeItem(item){
    return this._http.get("/api/removeItem/" + item)
    .map(data => data.json )
    .toPromise()
  }

  clearCart(){
    return this._http.get("/api/clearCart")
    .map(data => data.json)
    .toPromise()
  }

}
