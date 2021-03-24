import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  create(data): Observable<any> {
    return this.httpClient.post<any>('https://reqres.in/api/users/', JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  getById(id : number): Observable<any> {
    return this.httpClient.get<any>('https://reqres.in/api/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>('https://reqres.in/api/users')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, data): Observable<any> {
    return this.httpClient.put<any>('https://reqres.in/api/users/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete('https://reqres.in/api/users/' + id);
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
