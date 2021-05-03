import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { Schedule } from '../../../../../common/models/Schedule';
import { Medical } from '../../../../../common/models/Medical';


@Injectable()
export class ScheduleService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  create(schedule: Schedule): Observable<Schedule | null> {
    return this.http.post<any>(this.url + "/schedule", schedule, { headers: this.headers })
      .pipe(
        retry(2),
        map(res => {
          if (res.success) {
            return schedule;
          } else {
            return null;
          }
        })
      );
  }

  update(schedule: Schedule): Observable<Schedule | null> {
    return this.http.put<any>(this.url + "/schedule", JSON.stringify(schedule), { headers: this.headers })
      .pipe(
        retry(2),
        map(res => {
          if (res.success) {
            return schedule;
          } else {
            return null;
          }
        })
      );
  }

  index(schedule: Schedule): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url + "/schedule")
      .pipe(
        retry(2)
      );
  }
  getespecialidade(especialidade: string): Observable<Medical[]> {
    return this.http.get<Medical[]>(this.url + `/schedule/${especialidade}`)
      .pipe(
        retry(2)
      );
  }

}