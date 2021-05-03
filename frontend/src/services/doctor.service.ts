import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../../common/models/Patient'
import { Schedule } from '../../../common/models/Schedule'
import { retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private URL = 'http://localhost:3333/medics';

  constructor(private http: HttpClient) { }

  getPatients(crm: string): Observable<Patient[]> {
    var res = this.http.get<Patient[]>(this.URL + `/patients/${crm}`, {headers: this.headers})
            .pipe(
              retry(2)
            );
    console.log(res)
    return res
  }

  getAppointments(crm: string): Observable<Schedule[]> {
    var res = this.http.get<Schedule[]>(this.URL + `/appointments/${crm}`, {headers: this.headers})
                .pipe(
                  retry(2)
                )
    return res
  }
}
