import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Divisa } from '../models/Divisa.model';
import { ConstantsMethods, ConstantsVariables } from '../models/Constants.model';

@Injectable({
  providedIn: 'root'
})
export class TasasService {

  constructor(private http: HttpClient) { }

  public getTasasList(): Observable<Divisa> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(ConstantsVariables.URL + 'tasas', { headers }).
          pipe(map((rest: any) => {
            return rest;
    }));
  }

  public getTasas(id: string): Observable<Divisa> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(ConstantsVariables.URL + `tasas/${id}`, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public registerTasas(divisa: Divisa): Observable<Divisa> {
    const body = JSON.stringify(divisa);
    ConstantsMethods.logConsole(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(ConstantsVariables.URL + 'tasas/', body, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public updateTasas(id: string, divisa: Divisa): Observable<Divisa> {
    const body = JSON.stringify(divisa);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(ConstantsVariables.URL + `tasas/${id}`, body, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }

  public deleteTasas(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(ConstantsVariables.URL + `tasas/${id}`, { headers }).pipe(map((rest: any) => {
      return rest;
    }));
  }
}
