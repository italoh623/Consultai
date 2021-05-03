import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Schedule } from '../../../../../../common/models/Schedule';


@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  show(id: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url + `/medics/schedules/${id}`)
      .pipe(
        retry(2)
      );
  }

}