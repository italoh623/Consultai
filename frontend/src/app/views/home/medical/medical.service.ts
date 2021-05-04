import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Schedule } from '../../../../../../common/models/Schedule';
import { Patient } from '../../../../../../common/models/Patient';
import { Medical } from '../../../../../../common/models/Medical';
import { AppointmentFile } from '../../../../../../common/models/AppointmentFile'


@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333/medics';

  constructor(private http: HttpClient) { }

  listSchedule(crm: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url + `/schedules/${crm}`)
      .pipe(
        retry(2)
      );
  }

  listPatients(crm: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url + `/patients/${crm}`)
      .pipe(
        retry(2)
      );
  }

  getMedical(crm: string): Observable<Medical> {
    return this.http.get<Medical>(this.url + `/${crm}`)
      .pipe(
        retry(2)
      )
  }

  getPatientFiles(cpf: string): Observable<AppointmentFile[]> {
    return this.http.get<AppointmentFile[]>(this.url + `/apt-files/${cpf}`)
      .pipe(
        retry(2)
      )
  }

}