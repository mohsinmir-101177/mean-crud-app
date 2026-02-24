import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

// This relative path allows Nginx to proxy requests to the backend
const baseUrl = '/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  // ... keep the rest of your existing methods
}