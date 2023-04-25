import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { DateRange } from '../date-range/date-range.model';
import { TaxAzul, TaxVerde } from './edit-taxes/taxes.model';
import { SimulationReturn } from './simulation-return.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  BASE_URL: string = environment.api_url

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  readTaxAzul(): Observable<TaxAzul> {
    const url = `${this.BASE_URL}/taxes/1`;
    return this.http.get<TaxAzul>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readTaxVerde(): Observable<TaxVerde> {
    const url = `${this.BASE_URL}/taxes/2`;
    return this.http.get<TaxVerde>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  updateTax(tax: TaxAzul | TaxVerde): Observable<TaxAzul | TaxVerde> {
    const url = `${this.BASE_URL}/taxes/${tax instanceof TaxAzul ? 1 : 2}`;
    return this.http.put<TaxAzul | TaxVerde>(url, tax, { headers: this.authService.setAuthenticationBearerJWT() } ).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  simulate(medidoresID: string[], dateRange: DateRange): Observable<SimulationReturn> {
    const url = `${this.BASE_URL}/simulate-bill`;
    const params = this.generateHttpDateRangeParams(dateRange);
    return this.http.post<SimulationReturn>(url, { medidoresID }, { headers: this.authService.setAuthenticationBearerJWT(), params: params }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }

  generateHttpDateRangeParams(dateRange: DateRange): HttpParams {
    return new HttpParams().append('initialDate', dateRange.initialDate).append('finalDate', dateRange.finalDate);
  }
}
