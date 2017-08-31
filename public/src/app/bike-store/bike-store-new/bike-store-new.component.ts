import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import { BikeStoreService } from './../bike-store.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-bike-store-new',
  templateUrl: './bike-store-new.component.html',
  styleUrls: ['./bike-store-new.component.css']
})
export class BikeStoreNewComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/bikeupload'});
  public file_name:any;
  public bike:any;

  constructor(
    public _bikeService: BikeStoreService
  ) { }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addBike();
    }
  }

  holdBikeDetails(bike){
    this.bike = bike.value;
  }

  addBike(){
    console.log("bike");
    this._bikeService.addBike(this.bike, this.file_name)
    .then()
    .catch()
  }

}
