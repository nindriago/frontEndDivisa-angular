import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Divisa } from '../models/Divisa.model';
import { ConstantsMethods, ConstantsVariables } from '../models/Constants.model';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private http: HttpClient) {
    ConstantsMethods.logConsole('DivisasService - ACTIVO');
   }

  public getDivisaList(): Observable<Divisa> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(ConstantsVariables.URL + 'divisas', { headers }).
          pipe(map((rest: any) => {
            return rest;
    }));
  }

  public getDivisa(id: string): Observable<Divisa> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(ConstantsVariables.URL + `divisas/${id}`, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public registerDivisa(divisa: Divisa): Observable<Divisa> {
    const body = JSON.stringify(divisa);
    ConstantsMethods.logConsole(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(ConstantsVariables.URL + 'divisas/', body, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public updateDivisa(id: string, divisa: Divisa): Observable<Divisa> {
    const body = JSON.stringify(divisa);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(ConstantsVariables.URL + `divisas/${id}`, body, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public deleteDivisa(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(ConstantsVariables.URL + `divisas/${id}`, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }
}
