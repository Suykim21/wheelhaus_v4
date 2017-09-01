import { Component, HostListener } from '@angular/core';

// connecting jquery
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  ToggleMenu(){
    $(".close_menu").click(function () {
      $(".sidebar_menu").addClass("hide_menu");
      $(".toggle_menu").addClass("opacity_one");
      $(".title").addClass("opacity_one");
    });
  }

  openMenu(){
    $(".toggle_menu").click(function () {
      $(".sidebar_menu").removeClass("hide_menu");
      $(".toggle_menu").removeClass("opacity_one");
      $(".title").removeClass("opacity_one")
    });
  }
}
