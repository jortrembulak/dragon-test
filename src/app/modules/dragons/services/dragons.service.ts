import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dragon, Dragons } from '../models/dragons';

const URL_API = environment.url;
@Injectable({
  providedIn: 'root',
})
export class DragonsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Dragons> {
    return this.http
      .get<Dragons>(`${URL_API}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getById(id: string): Observable<Dragon> {
    return this.http
      .get<Dragon>(`${URL_API}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  insert(dragon: Dragon): Observable<Dragon> {
    return this.http
      .post<Dragon>(`${URL_API}`, dragon)
      .pipe(retry(1), catchError(this.handleError));
  }

  update(id: string, dragon: Dragon): Observable<Dragon> {
    return this.http
      .put<Dragon>(`${URL_API}/${id}`, dragon)
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(id: string): Observable<Dragon> {
    return this.http
      .delete<Dragon>(`${URL_API}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(() => new Error(errorMessage));
  }
}
