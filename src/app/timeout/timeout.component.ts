import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {
  public time: number;
  @Output() curentTime = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  getTime() {
    this.curentTime.emit(this.time);

  }
}
