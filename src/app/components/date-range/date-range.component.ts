import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.emitDateRange();
  }

  setDefaultDatePickerToToday(): string {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

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

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}
