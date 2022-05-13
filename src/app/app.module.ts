import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { NgxChartsModule } from '@swimlane/ngx-charts'; 

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { MedidorCrudComponent } from './views/medidor-crud/medidor-crud.component';
import { FeriadoCrudComponent } from './views/feriado-crud/feriado-crud.component';
import { MedidorCreateComponent } from './components/medidor/medidor-create/medidor-create.component';
import { FeriadoCreateComponent } from './components/feriado/feriado-create/feriado-create.component';
import { MedidorReadComponent } from './components/medidor/medidor-read/medidor-read.component';
import { FeriadoReadComponent } from './components/feriado/feriado-read/feriado-read.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FeriadoDeleteComponent } from './components/feriado/feriado-delete/feriado-delete.component';
import { MedidorDeleteComponent } from './components/medidor/medidor-delete/medidor-delete.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';



registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    MedidorCrudComponent,
    FeriadoCrudComponent,
    MedidorCreateComponent,
    FeriadoCreateComponent,
    MedidorReadComponent,
    FeriadoReadComponent,
    FeriadoDeleteComponent,
    MedidorDeleteComponent,
    TabsComponent,
    DateRangeComponent,
    LineChartComponent,
    BarChartComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    NgxChartsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
