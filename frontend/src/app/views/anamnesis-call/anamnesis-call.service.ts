import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { MedicalAppointment } from '../../../../../common/models/MedicalAppointment';


@Injectable()
export class AnamnesisService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  create(medicalAppointment: MedicalAppointment): Observable<MedicalAppointment | null> {
    return this.http.post<any>(this.url + "/medicalAppointment", medicalAppointment, { headers: this.headers })
      .pipe(
        retry(2),
        map(res => {
          if (res.success) {
            return medicalAppointment;
          } else {
            return null;
          }
        })
      );
  }

  update(medicalAppointment: MedicalAppointment): Observable<MedicalAppointment | null> {
    return this.http.put<any>(this.url + "/medicalAppointment", JSON.stringify(medicalAppointment), { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { 
          if (res.success) { 
            return medicalAppointment; 
          } else { 
            return null; 
          } 
        })
      );
  }

  index(medicalAppointment: MedicalAppointment): Observable<MedicalAppointment[]> {
    return this.http.get<MedicalAppointment[]>(this.url + "/medicalAppointment")
      .pipe(
        retry(2)
      );
  }

}