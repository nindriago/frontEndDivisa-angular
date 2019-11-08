import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisaComponent } from './pages/divisa/divisa.component';

const routes: Routes = [
  {
    path: 'divisa',
    component: DivisaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
