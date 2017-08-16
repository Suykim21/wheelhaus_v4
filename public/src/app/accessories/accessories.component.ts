import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import { AccessoriesService } from './accessories.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
    public uploader:FileUploader = new FileUploader({url:'http://localhost:3002/accessoryupload'});
    public file_name:any;
    public accessory:any;
    public all_accessories:Array<any>;

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addAccessory();
    }
    this.getAllAccessories();
	}

	constructor(public _accessoryService: AccessoriesService) {}

  holdAccessoryDetails(accessory){
    this.accessory = accessory.value;
  }

  addAccessory(){
    var accessory = this.accessory;
    console.log(this.accessory);
    this._accessoryService.addAccessory(accessory, this.file_name)
    .then()
    .catch()
  }

  getAllAccessories(){
    this._accessoryService.getAllAccessories()
    .then(accessories => { this.all_accessories = accessories;
    })
    .catch()
  }
}
