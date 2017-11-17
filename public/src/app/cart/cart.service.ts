import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  private message = new BehaviorSubject<string>("cart initialized");
  currentMessage = this.message.asObservable();

  constructor(
    private _http: Http
  ) { }

  updateCartCount(message: string){
    this.message.next(message)
  }

  getCart(){
    return this._http.get("/api/getCart")
    .map(data => data.json())
    .toPromise()
  }

  addItem(id, type){
    return this._http.post('/api/addItem/' + type, {id: id})
    .map(data => data)
    .toPromise()
  }

  removeItem(item){
    return this._http.get("/api/removeItem/" + item)
    .map(data => data.json() )
    .toPromise()
  }

  plusItem(item){
    return this._http.get("/api/plusItem" + item)
    .map(data => data.json() )
    .toPromise()
  }

  minusItem(item){
    return this._http.get("/api/minusItem" + item)
    .map(data => data.json())
    .toPromise()
  }

  getEachCost(item){
    return this._http.get("/api/getEachCost" + item)
    .map(data=> data.json())
    .toPromise()
  }

  clearCart(){
    return this._http.get("/api/clearCart")
    .map(data => data.json() )
    .toPromise()
  }

}
