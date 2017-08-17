import { Component, OnInit} from '@angular/core';
import {  FileUploader } from 'ng2-file-upload';
import { EventsService } from './events.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3002/eventupload'});
  public file_name:any;
  public event:any;
  public all_events:Array<any>;

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
     this.getAllEvents();
	}

  holdEventDetails(event){
    this.event = event.value;
  }

  addEvent(){
    var event = this.event;
    this._eventService.addEvent(event, this.file_name)
    .then()
    .catch()
  }

  getAllEvents(){
    this._eventService.getAllEvents()
    .then(events => { this.all_events = events; console.log(this.all_events) })
    .catch()
  }

}
