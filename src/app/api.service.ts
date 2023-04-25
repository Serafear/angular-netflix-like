import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:3000/inscription';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const endPoint = '/inscription';
    return this.http.post(`${this.API_URL}${endPoint}`, userData);
  }
  
}

