import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidorService } from '../medidor.service';

@Component({
  selector: 'app-medidor-create',
  templateUrl: './medidor-create.component.html',
  styleUrls: ['./medidor-create.component.css']
})
export class MedidorCreateComponent implements OnInit {

  constructor(private medidorService: MedidorService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedidor(): void {
    this.medidorService.showMessage("Medidor adicionado!");
  }

  cancel(): void {
    this.router.navigate(['/medidores']);
  }
}
