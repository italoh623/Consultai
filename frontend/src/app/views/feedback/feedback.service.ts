import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { Feedback } from '../../../../../common/models/Feedback';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333/feedbacks';

  constructor(private http: HttpClient) { }

  enviarEmail(feedback: Feedback): Observable<Feedback | null> {
    return this.http.post<Feedback[]>(this.url, feedback , { headers: this.headers})
      .pipe(
        retry(2),
        map(res => { 
          if (res) { 
            return feedback; 
          } else { 
            return null; 
          } 
        })
      );
  }

}