import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(
    private readonly http: HttpClient
  ) { }

  sendMessage(message: string): Observable<boolean> {
    return this.http
      .post<boolean>('http://localhost:5234/CodingTools', message);
  }

}
