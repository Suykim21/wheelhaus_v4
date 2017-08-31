import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import { EventsService } from './../events.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-events-new',
  templateUrl: './events-new.component.html',
  styleUrls: ['./events-new.component.css']
})
export class EventsNewComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url:'http://localhost:6789/eventupload'});
  public file_name:any;
  public event:any;

  constructor(public _eventService: EventsService) { }

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.file_name = response;
      this.addEvent();
     }
  }

  holdEventDetails(event){
    this.event = event.value;
  }

  addEvent(){
    this._eventService.addEvent(this.event, this.file_name)
    .then()
    .catch()
  }
}
