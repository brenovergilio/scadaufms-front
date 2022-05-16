import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { MedidorMD30 } from './medidor.model';

@Injectable({
  providedIn: 'root'
})
export class MedidorService {

  BASE_URL: string = 'http://localhost:3000/medidores'

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(medidor: MedidorMD30): Observable<MedidorMD30> {
    return this.http.post<MedidorMD30>(this.BASE_URL, medidor, { headers: this.authService.setAuthenticationBearerJWT() } ).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  read(): Observable<Array<MedidorMD30>> {
    return this.http.get<Array<MedidorMD30>>(this.BASE_URL, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readByID(id: string): Observable<MedidorMD30> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<MedidorMD30>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  delete(id: string): Observable<MedidorMD30> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<MedidorMD30>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }
}
