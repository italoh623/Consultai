import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Schedule } from '../../../../../../common/models/Schedule';
import { Patient } from '../../../../../../common/models/Patient';
import { Medical } from '../../../../../../common/models/Medical';


@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  listSchedule(crm: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url + `/medics/schedules/${crm}`)
      .pipe(
        retry(2)
      );
  }

  listPatients(crm: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url + `/medics/patients/${crm}`)
      .pipe(
        retry(2)
      );
  }

  getMedical(crm: string): Observable<Medical> {
    return this.http.get<Medical>(this.url + `/medics/${crm}`)
      .pipe(
        retry(2)
      )
  }

}