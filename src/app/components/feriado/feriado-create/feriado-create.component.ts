import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeriadoService } from '../feriado.service';

@Component({
  selector: 'app-feriado-create',
  templateUrl: './feriado-create.component.html',
  styleUrls: ['./feriado-create.component.css']
})
export class FeriadoCreateComponent implements OnInit {

  constructor(private feriadorService: FeriadoService, private router: Router) { }

  ngOnInit(): void {
  }

  createFeriado(): void {
    this.feriadorService.showMessage("Feriado adicionado!");
  }

  cancel(): void {
    this.router.navigate(['/feriados']);
  }
}
