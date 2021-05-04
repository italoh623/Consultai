import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Schedule } from '../../../../../../common/models/Schedule';
import { Patient } from '../../../../../../common/models/Patient';
import { Medical } from '../../../../../../common/models/Medical';
import { AppointmentFile } from '../../../../../../common/models/AppointmentFile'
import { MedicalAppointment } from '../../../../../../common/models/MedicalAppointment';


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

  getPatientFiles(cpf: string): Observable<AppointmentFile[]> {
    return this.http.get<AppointmentFile[]>(this.url + `/medics/apt-files/${cpf}`)
      .pipe(
        retry(2)
      )
  }

  getMedicalAppointment(chedulingId: string): Observable<MedicalAppointment> {
    return this.http.get<MedicalAppointment>(this.url + `/medicalAppointments/agendamento/${chedulingId}`)
      .pipe(
        retry(2)
      );
  }
  
  addAppointmentFile(aptFile: AppointmentFile) {
    console.log(aptFile)
    return this.http.post<AppointmentFile>(this.url + `/apt-file`, aptFile, {headers: this.headers})
      .pipe(
        retry(2)
      )
  }

}