import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { Alarme } from './alarme.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlarmeService {

  BASE_URL: string = `${environment.api_url}/medidores`

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
  
  read(measurerID: string): Observable<Array<Alarme>> {
    const url = `${this.BASE_URL}/${measurerID}/alarmes`;
    return this.http.get<Array<Alarme>>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readByID(id: string): Observable<Alarme> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Alarme>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  delete(id: string): Observable<Alarme> {
    const url = `${this.BASE_URL}/alarmes/${id}`;
    return this.http.delete<Alarme>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }
}
