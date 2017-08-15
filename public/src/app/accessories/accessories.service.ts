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
    console.log(path);
    return this._http.post('/api/addAccessory', accessory)
    .map(data => data.json())
    .toPromise();
  }

  getAllAccessories(){
    return this._http.get('/api/getAllAccessories')
    .map(data => data.json())
    .toPromise();
  }
}
