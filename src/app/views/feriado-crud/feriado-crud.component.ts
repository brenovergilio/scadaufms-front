import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-feriado-crud',
  templateUrl: './feriado-crud.component.html',
  styleUrls: ['./feriado-crud.component.css']
})
export class FeriadoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Feriados',
      icon: 'edit_calendar',
      routeUrl: '/feriados'
    }
   }

  ngOnInit(): void {
  }

  navigateToMedidorCreate(): void {
    this.router.navigate(['feriados/create']);
  }
}
