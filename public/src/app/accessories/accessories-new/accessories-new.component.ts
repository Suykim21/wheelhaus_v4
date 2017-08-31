import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { AccessoriesService } from './../accessories.service';
@Component({
  selector: 'app-accessories-new',
  templateUrl: './accessories-new.component.html',
  styleUrls: ['./accessories-new.component.css']
})
export class AccessoriesNewComponent implements OnInit {
      public uploader:FileUploader = new FileUploader({url:'/accessoryupload'});
      public file_name:any;
      public accessory:any;
  constructor(
    public _accessoryService: AccessoriesService
  ) { }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addAccessory();
    }
  }

  holdAccessoryDetails(accessory){
    this.accessory = accessory.value;
  }

  addAccessory(){
    this._accessoryService.addAccessory(this.accessory, this.file_name)
    .then()
    .catch()
  }

}
