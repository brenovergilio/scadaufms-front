import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidorMD30 } from '../medidor.model';
import { MedidorService } from '../medidor.service';

@Component({
  selector: 'app-medidor-create',
  templateUrl: './medidor-create.component.html',
  styleUrls: ['./medidor-create.component.css']
})
export class MedidorCreateComponent implements OnInit {

  medidor: MedidorMD30 = {
    ip: '',
    name: '',
  } 

  constructor(private medidorService: MedidorService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedidor(): void {
    this.medidorService.create(this.medidor).subscribe(() => {
      this.medidorService.showMessage("Medidor adicionado!");
      this.router.navigate(['/medidores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medidores']);
  }
}
