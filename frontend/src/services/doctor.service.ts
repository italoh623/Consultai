import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../../common/Patient'
import { retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private URL = 'http://localhost:3333';


  constructor(private http: HttpClient) { }

  getPatients(crm: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.URL + `/medics/patients/${crm}`, {headers: this.headers})
            .pipe(
              retry(2)
            );
  }
}
