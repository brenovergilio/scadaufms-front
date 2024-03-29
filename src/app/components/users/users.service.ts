import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';
import { User } from './user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string = `${environment.api_url}/users`

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private authService: AuthService) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.BASE_URL, user, { headers: this.authService.setAuthenticationBearerJWT() } ).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  read(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.BASE_URL, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  readByID(id: string): Observable<User> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<User>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }

  delete(id: string): Observable<User> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<User>(url, { headers: this.authService.setAuthenticationBearerJWT() }).pipe(
      map(obj => obj), 
      catchError(error => this.handleError(error))
    );
  }
  
  handleError(error: any): Observable<any> {
    this.showMessage(error.error.message, true);
    return EMPTY;
  }
}
