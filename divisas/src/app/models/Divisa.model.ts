export class Divisa {
  idDivisa: number;
  codigo: string;
  tasa: string;
  status: boolean;

  constructor() { }

  public manageDivisa(idDivisa: string,
                      codigo: string,
                      tasa: string,
                      status: boolean
    ): Divisa {
    const divisa = new Divisa();
    if (idDivisa !== undefined && idDivisa !== null) {
      divisa.idDivisa = Number(idDivisa);
    }
    if (codigo !== undefined && codigo !== null) {
      divisa.codigo = codigo;
    }
    if (tasa !== undefined && tasa !== null) {
      divisa.tasa = tasa;
    }
    if (status !== undefined && status !== null) {
      divisa.status = status;
    }
    return divisa;
  }
}
