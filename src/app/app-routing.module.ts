import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MedidorCrudComponent } from './views/medidor-crud/medidor-crud.component';
import { MedidorCreateComponent } from './components/medidor/medidor-create/medidor-create.component';
import { FeriadoCrudComponent } from './views/feriado-crud/feriado-crud.component';
import { FeriadoCreateComponent } from './components/feriado/feriado-create/feriado-create.component';
import { FeriadoDeleteComponent } from './components/feriado/feriado-delete/feriado-delete.component';
import { MedidorDeleteComponent } from './components/medidor/medidor-delete/medidor-delete.component';
import { TabsComponent } from './components/tabs/tabs.component';

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
    path: "medidores/create",
    component: MedidorCreateComponent
  },
  {
    path: "medidores/delete/:id",
    component: MedidorDeleteComponent
  },
  {
    path: "medidores/medicoes/:id",
    component: TabsComponent
  },
  {
    path: "feriados",
    component: FeriadoCrudComponent
  },
  {
    path: "feriados/create",
    component: FeriadoCreateComponent
  }
  ,
  {
    path: "feriados/delete/:id",
    component: FeriadoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
