import { Component, OnInit} from '@angular/core';
import { EventsService } from './events.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public event:any;
  public all_events:Array<any>;

  constructor(public _eventService: EventsService) { }

  ngOnInit() {
     this.getAllEvents();
	}

  getAllEvents(){
    this._eventService.getAllEvents()
    .then(events => this.all_events = events)
    .catch()
  }

}
