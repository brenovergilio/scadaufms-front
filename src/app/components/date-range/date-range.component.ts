import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateRange } from './date-range.model';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

  @Output() dateRangeEmitter = new EventEmitter();

  dateRange: DateRange = {
    initialDate: this.setDefaultDatePickerToToday(),
    finalDate: this.setDefaultDatePickerToToday()
  }

  constructor() { }

  ngOnInit(): void {
    this.emitDateRange();
  }

  setDefaultDatePickerToToday(): string {
    const date = new Date();
    const currentYear = date.getUTCFullYear();
    const currentMonth = date.getUTCMonth() + 1;
    const currentDay = date.getUTCDate();


    // Need to match yyyy-MM-dd pattern

    let today: string = currentYear.toString() + '-';

    currentMonth < 10 ? today += "0" + currentMonth : today += currentMonth.toString();
    today += '-';

    currentDay < 10 ? today += "0"+ currentDay: today += currentDay.toString();

    return today;
  }

  emitDateRange(): void {
    this.dateRangeEmitter.emit(this.dateRange);
  }
}
