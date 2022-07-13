import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateRange } from '../date-range/date-range.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Medicao } from './medicao.model';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedicaoService {

  BASE_URL: string = 'http://localhost:3000/medidores';

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  readAll(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/all`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }
  
  readTensoes(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/tensoes`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readCorrentes(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/correntes`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readPotenciasAtivas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/potencias-ativas`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readPotenciasReativas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/potencias-reativas`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readConsumosAtivos(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/consumos-ativos`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readConsumosReativos(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/consumos-reativos`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readDemandasAtivas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/demandas-ativas`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readDemandasReativas(measurerID: string, dateRange: DateRange): Observable<Array<Medicao>> {
    const url = `${this.BASE_URL}/${measurerID}/medicoes/demandas-reativas`;
    const params = this.generateHttpDateRangeParams(dateRange);

    return this.http.get<Array<Medicao>>(url, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
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
