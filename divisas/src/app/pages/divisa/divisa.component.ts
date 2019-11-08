import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DivisasService } from 'src/app/services/divisas.service';
import { ConstantsMethods } from 'src/app/models/Constants.model';
import { Subscription } from 'rxjs';
import { TasasService } from '../../services/tasas.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
})
export class DivisaComponent implements OnInit {
  currenciesForm: FormGroup;
  title = 'divisas';
  valorEntrada = 0;
  valorSalida = 0;
  tasaCambio: number;
  idDivisa: string;
  divisaSuscription: Subscription;
  tasasSuscription: Subscription;

  divisasArray: any[];
  divisasArraySalida: any[];

  constructor(private formBuilder: FormBuilder,
              private divisaService: DivisasService,
              private tasasService: TasasService) {
    ConstantsMethods.logConsole('DivisaComponent - ACTIVO');
    this.getDivisaList();
  }

  ngOnInit() {
    this.createForm();
  }

  public inputEntrada() {
    this.valorEntrada = this.currenciesForm.controls.currencyEntrada_1.value;
  }

  public createForm() {
    this.currenciesForm = this.formBuilder.group({
      currencyEntrada_1: ['', [Validators.required, Validators.min(1)]],
      currencyEntrada_2: ['', [Validators.required]],
      currencyEntrada_3: ['', [Validators.required, Validators.min(1)]],
      currencyEntrada_4: ['', [Validators.required, Validators.min(1)]],
    });
  }

  public updateForm() {
    ConstantsMethods.logConsole('this.divisasArraySalida');
    ConstantsMethods.logConsole(this.divisasArraySalida);

    this.currenciesForm.patchValue({
      currencyEntrada_3: this.divisasArraySalida
    });
  }

  public getDivisaList() {
    this.divisaSuscription = this.divisaService.getDivisaList()
    .subscribe((divisasCatalogo: any) => {
      this.divisasArray = divisasCatalogo;
      ConstantsMethods.logConsole('metodo getDivisaList');
      ConstantsMethods.logConsole(this.divisasArray);
    }, (error) => {
      ConstantsMethods.logConsole('Error getDivisaList');
      ConstantsMethods.logConsole(error);
    }, () => {
      ConstantsMethods.logConsole('Termina getDivisaList');
      this.divisaSuscription.unsubscribe();
    });
  }

  public getTasasList() {
    this.tasasSuscription = this.tasasService.getTasas(this.idDivisa)
    .subscribe((tasasCatalogo: any) => {
      this.divisasArraySalida = tasasCatalogo;
      ConstantsMethods.logConsole('metodo getTasasList');
      ConstantsMethods.logConsole(this.divisasArraySalida);
    }, (error) => {
      ConstantsMethods.logConsole('Error getTasasList');
      ConstantsMethods.logConsole(error);
    }, () => {
      ConstantsMethods.logConsole('Termina getTasasList');
      this.tasasSuscription.unsubscribe();
    });
  }

  public valorCambiado(simbolo: string) {
    if (simbolo !== undefined) {
      this.divisasArray.filter( tasaCambio => {
        if (tasaCambio.codigo === simbolo) {
          this.idDivisa = tasaCambio.idDivisa;
          this.getTasasList();
        }
      });
    }
  }

  onSubmit() {
    ConstantsMethods.logConsole(this.currenciesForm);
    this.divisasArraySalida.filter(tasaCambio => {
      if (tasaCambio.divisaSalida === this.currenciesForm.controls.currencyEntrada_3.value) {
        this.tasaCambio = Number(tasaCambio.tasa);
        this.valorSalida = this.valorEntrada * this.tasaCambio;
      }
    });
  }
}
