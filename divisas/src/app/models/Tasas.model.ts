import { Divisa } from './Divisa.model';

export class Tasas {
  id: number;
  tasa: string;
  divisaSalida: string;
  idDivisa: Divisa;
  fecha: Date;

  constructor() { }

  public manageTasas(id: string,
                     tasa: string,
                     idDivisa: Divisa,
                     divisaSalida: string,
                     fecha: Date
    ): Tasas {
    const tasas = new Tasas();
    if (id !== undefined && id !== null) {
      tasas.id = Number(id);
    }
    if (tasa !== undefined && tasa !== null) {
      tasas.tasa = tasa;
    }
    if (idDivisa !== undefined && idDivisa !== null) {
      tasas.idDivisa = idDivisa;
    }
    if (divisaSalida !== undefined && divisaSalida !== null) {
      tasas.divisaSalida = divisaSalida;
    }
    if (fecha !== undefined && fecha !== null) {
      tasas.fecha = fecha;
    }
    return tasas;
  }
}
