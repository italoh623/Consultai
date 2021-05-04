import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Archive } from '../../../../../common/models/Archive'; 


@Injectable()
export class ArchiveService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:4500';

  constructor(private http: HttpClient) { }

  criar(arquivo: Archive): Observable<Archive | null> {
    return this.http.post<any>(this.url + "/file-system", arquivo, {headers: this.headers})
             .pipe( 
                retry(2),
                map( res => 
                  {if (res.success) {
                    return arquivo;
                  } else {
                    return null;
                  }} )
              );
  }
  editar(arquivo: Archive): Observable<Archive | null>{
    return this.http.put<any>(this.url + "/file-system",JSON.stringify(arquivo), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return arquivo;} else {return null;}} )
              ); 
  }
}
