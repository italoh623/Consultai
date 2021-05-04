import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Schedule } from '../../../../../../common/models/Schedule';
import { Patient } from '../../../../../../common/models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  listSchedulings(cpf: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url + `/schedulings/patient/${cpf}`)
      .pipe(
        retry(2)
      );
  }

  getPatient(cpf: string): Observable<Patient> {
    return this.http.get<Patient>(this.url + `/patients/${cpf}`)
      .pipe(
        retry(2)
      );
  }

}