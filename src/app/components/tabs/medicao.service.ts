import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateRange } from '../date-range/date-range.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Medicao } from './medicao.model';

@Injectable({
  providedIn: 'root'
})
export class MedicaoService {

  BASE_URL: string = 'http://localhost:3000/medicoes';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  readTensoes(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/tensoes/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readCorrentes(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/correntes/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readPotenciasAtivas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/potencias-ativas/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readPotenciasReativas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/potencias-reativas/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readPotenciasAparentes(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/potencias-aparentes/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readFatoresPotencia(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/fatores-potencia/${measurerID}`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }

  generateHttpDateRangeParams(dateRange: DateRange): HttpParams {
    return new HttpParams().append('initialDate', dateRange.initialDate).append('finalDate', dateRange.finalDate);
  }
}
