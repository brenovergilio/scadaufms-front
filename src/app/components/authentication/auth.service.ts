import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthLogin } from './auth.model';
import { JWTToken } from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL: string = 'http://localhost:3000/auth/users'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  login(authLogin: AuthLogin): Observable<JWTToken> {
    return this.http.post<JWTToken>(this.BASE_URL, authLogin).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  logout(): void {
    window.localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    return !!window.localStorage.getItem('jwtToken');
  }

  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }
}
