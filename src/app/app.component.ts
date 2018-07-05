import { Component, OnInit } from '@angular/core';
import {TimeoutComponent} from './timeout/timeout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public time: number;
  public curentTime: number;
  //public Error = new Error('sxal a');
  constructor() {}
   ngOnInit() {

   }
  getTime($event) {
    this.time = $event;
    setTimeout(() => {
      this.curentTime = this.time;
    }, this.time * 1000 );
  }
}
