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
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginScreenGuard } from './guards/login-screen.guard';
import { AlarmesCrudComponent } from './views/alarmes-crud/alarmes-crud.component';
import { MedidorUpdateComponent } from './components/medidor/medidor-update/medidor-update.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores",
    component: MedidorCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores/create",
    component: MedidorCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores/:id/delete",
    component: MedidorDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores/:id/update",
    component: MedidorUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores/:id/medicoes",
    component: TabsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "feriados",
    component: FeriadoCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "feriados/create",
    component: FeriadoCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "feriados/:id/delete",
    component: FeriadoDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "medidores/:id/alarmes",
    component: AlarmesCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users",
    component: UsersCrudComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/create",
    component: UserCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/:id/delete",
    component: UserDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: AuthenticationComponent,
    canActivate: [LoginScreenGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
