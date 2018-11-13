import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-wedding-count-down',
  templateUrl: './wedding-count-down.component.html',
  styleUrls: ['./wedding-count-down.component.css']
})
export class WeddingCountDownComponent implements OnInit {
  isCustomTemplate = true;
  wedding_date = new Date('January 31, 2019 00:00:00');
  days;
  hours;
  minutes;
  seconds;
  current_date;
  days_left;
  source = interval(1000);
  subscription = this.source.subscribe(val => this.daysLeftCounter());

  ngOnInit() {
  }

  daysLeftCounter() {
    this.current_date = new Date();
    this.days_left = this.wedding_date.getTime() - this.current_date.getTime();
    this.days = Math.floor(this.days_left / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.days_left % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.days_left % (1000 * 60)) / 1000);
  }

}
