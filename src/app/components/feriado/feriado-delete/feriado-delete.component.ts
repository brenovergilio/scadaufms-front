import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feriado } from '../feriado.model';
import { FeriadoService } from '../feriado.service';

@Component({
  selector: 'app-feriado-delete',
  templateUrl: './feriado-delete.component.html',
  styleUrls: ['./feriado-delete.component.css']
})
export class FeriadoDeleteComponent implements OnInit {

  feriado: Feriado;

  constructor(private feriadoService: FeriadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.feriadoService.readByID(id).subscribe(feriado => this.feriado = feriado);
  }

  deleteFeriado(): void {
    this.feriadoService.delete(this.feriado.id).subscribe(() => {
      this.feriadoService.showMessage("Feriado deletado com sucesso");
      this.router.navigate(['/feriados']);
    });
  }

  cancel(): void {
    this.router.navigate(['/feriados']);
  }
}
