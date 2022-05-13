import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { Feriado } from './feriado.model';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  BASE_URL: string = 'http://localhost:3000/holidays'

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(feriado: Feriado): Observable<Feriado> {
    return this.http.post<Feriado>(this.BASE_URL, feriado, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  read(): Observable<Array<Feriado>> {
    return this.http.get<Array<Feriado>>(this.BASE_URL, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readByID(id: number): Observable<Feriado> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Feriado>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  delete(id: number): Observable<Feriado> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Feriado>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }
}