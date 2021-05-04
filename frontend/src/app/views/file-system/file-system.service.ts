import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Archive } from '../../../../../common/models/Archive'; 


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  criar(
    crm : string,
    cpf: string,
    obs : string,
    description : string, 
    conteudo: Object
  ): Observable<Archive | null> {
    return this.http.post<Archive>(this.url + "/archives", {
      crm: crm,
      cpf: cpf,
      obs: obs,
      description: description,
      conteudo: conteudo
    }, {headers: this.headers})
             .pipe( 
                retry(2)
              );
  }
  editar(arquivo: Archive): Observable<Archive | null>{
    return this.http.put<any>(this.url + "/archives",JSON.stringify(arquivo), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return arquivo;} else {return null;}} )
              ); 
  }

  getByCPF(cpf: string): Observable<Archive[]> {
    return this.http.get<Archive[]>(this.url + `/archives/${cpf}`, {headers: this.headers})
      .pipe(
        retry(2)
      )
  }

  getById(id: string): Observable<Archive> {
    return this.http.get<Archive>(this.url + `/archives/id/${id}`, {headers: this.headers})
    .pipe(
      retry(2)
    )
  }
}
