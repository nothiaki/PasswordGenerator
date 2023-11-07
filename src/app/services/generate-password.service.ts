import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { password } from '../interfaces/password';

@Injectable({
  providedIn: 'root'
})
export class GeneratePasswordService {

  url: string = 'https://api.api-ninjas.com/v1/passwordgenerator?length=12';
  headers: HttpHeaders = new HttpHeaders({
    'X-Api-Key': 'EST4yYPppJBoVwIiCJvOm5RthG5IPH0P1mNuoY8d'
  });

  constructor(private http: HttpClient) { }

  getPassword(): Observable<password> {
    console.log({ headers: this.headers });
    return this.http.get<password>(this.url, { headers: this.headers });
  }
}
