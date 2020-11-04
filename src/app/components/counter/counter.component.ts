import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    if (this.count !== 0) {
      this.count--;
    }
  }

}
