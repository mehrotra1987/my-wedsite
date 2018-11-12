import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-count-down',
  templateUrl: './wedding-count-down.component.html',
  styleUrls: ['./wedding-count-down.component.css']
})
export class WeddingCountDownComponent implements OnInit {
  isCustomTemplate = true;
  finishDate = 'January 31, 2019 00:00';
  days1;
  hours1;
  minutes1;
  seconds1;
  textColor = 'black';

  ngOnInit() {
  }

  onDaysChanged(days) {
    this.days1 = days;
  }

  onHoursChanged(hours) {
    this.hours1 = hours;
  }

  onMinutesChanged(minutes) {
    this.minutes1 = minutes;
  }

  onSecondsChanged(seconds) {
    this.seconds1 = seconds;
  }

}
