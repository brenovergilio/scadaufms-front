import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feriado-crud',
  templateUrl: './feriado-crud.component.html',
  styleUrls: ['./feriado-crud.component.css']
})
export class FeriadoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMedidorCreate(): void {
    this.router.navigate(['feriados/create']);
  }
}
