import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { password } from '../interfaces/password';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {

  url: string = 'https://random-password-api.vercel.app/';

  constructor(private http: HttpClient) { }

  getPassword(length: number): Observable<password> {
    return this.http.get<password>(this.url + length);
  }
}
