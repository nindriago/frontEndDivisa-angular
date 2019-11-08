import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DivisasService } from './divisas.service';
import { TasasService } from './tasas.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DivisasService,
    TasasService
  ],
  declarations: []
})
export class ServicesModule { }
