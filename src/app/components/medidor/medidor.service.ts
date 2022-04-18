import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MedidorMD30 } from './medidor.model';

@Injectable({
  providedIn: 'root'
})
export class MedidorService {

  BASE_URL: string = 'http://localhost:3000/medidores'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(medidor: MedidorMD30): Observable<MedidorMD30> {
    return this.http.post<MedidorMD30>(this.BASE_URL, medidor);
  }

  read(): Observable<Array<MedidorMD30>> {
    return this.http.get<Array<MedidorMD30>>(this.BASE_URL);
  }
}
