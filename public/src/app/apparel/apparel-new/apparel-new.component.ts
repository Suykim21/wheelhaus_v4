import { RouterModule, Routes, Router } from '@angular/router';
import { ApparelService } from './../apparel.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-apparel-new',
  templateUrl: './apparel-new.component.html',
  styleUrls: ['./apparel-new.component.css']
})
export class ApparelNewComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({
    url: 'http://localhost:6789/api/apparelupload',
  });

  public filename: any;
  public apparel: any;

  errors: any;

  constructor(
    private _apparelService: ApparelService,
    private router: Router,
  ) { }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.filename = response;
      this.addApparel();
     }
  }

  holdApparelDetails(apparel){
    this.apparel = apparel.value;
  }

  addApparel(){
    var apparel = this.apparel;
    this._apparelService.addApparel(apparel, this.filename)
    .then()
    .catch()
  }
}
