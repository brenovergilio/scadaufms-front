import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';
import { Feriado } from '../feriado.model';
import { FeriadoService } from '../feriado.service';

@Component({
  selector: 'app-feriado-create',
  templateUrl: './feriado-create.component.html',
  styleUrls: ['./feriado-create.component.css']
})
export class FeriadoCreateComponent implements OnInit {

  feriado: Feriado = {
    name: '',
    day: DateTime.now()
  }

  constructor(private feriadorService: FeriadoService, private router: Router) { }

  ngOnInit(): void {
  }

  createFeriado(): void {
    this.feriadorService.create(this.feriado).subscribe(() => {
      this.feriadorService.showMessage("Feriado adicionado!");
      this.router.navigate(['/feriados']);
    });
  }

  cancel(): void {
    this.router.navigate(['/feriados']);
  }
}
