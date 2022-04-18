import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medidor-crud',
  templateUrl: './medidor-crud.component.html',
  styleUrls: ['./medidor-crud.component.css']
})
export class MedidorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMedidorCreate(): void {
    this.router.navigate(['medidores/create']);
  }
}
