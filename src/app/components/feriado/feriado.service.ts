import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Feriado } from './feriado.model';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  BASE_URL: string = 'http://localhost:3000/holidays'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(feriado: Feriado): Observable<Feriado> {
    return this.http.post<Feriado>(this.BASE_URL, feriado);
  }

  read(): Observable<Array<Feriado>> {
    return this.http.get<Array<Feriado>>(this.BASE_URL);
  }
}