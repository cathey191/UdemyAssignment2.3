import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-btn',
  templateUrl: './display-btn.component.html',
  styleUrls: ['./display-btn.component.css']
})
export class DisplayBtnComponent implements OnInit {
  displayText = false;
  clickTime = [];
  counter = [];

  constructor() { }

  ngOnInit() {
  }

  changeBoolean() {
    this.clickTime.push(new Date());
    if (this.displayText === false) {
      this.displayText = true;
    } else {
      this.displayText = false;
    }
  }
}
