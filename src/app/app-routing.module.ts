import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MedidorCrudComponent } from './views/medidor-crud/medidor-crud.component';
import { FeriadoCrudComponent } from './views/feriado-crud/feriado-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "medidores",
    component: MedidorCrudComponent
  },
  {
    path: "feriados",
    component: FeriadoCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
