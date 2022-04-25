import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-medidor-crud',
  templateUrl: './medidor-crud.component.html',
  styleUrls: ['./medidor-crud.component.css']
})
export class MedidorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Medidores',
      icon: 'flash_on',
      routeUrl: '/medidores'
    }
   }

  ngOnInit(): void {
  }

  navigateToMedidorCreate(): void {
    this.router.navigate(['medidores/create']);
  }
}
