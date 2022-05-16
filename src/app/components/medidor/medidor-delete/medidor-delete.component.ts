import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedidorMD30 } from '../medidor.model';
import { MedidorService } from '../medidor.service';

@Component({
  selector: 'app-medidor-delete',
  templateUrl: './medidor-delete.component.html',
  styleUrls: ['./medidor-delete.component.css']
})
export class MedidorDeleteComponent implements OnInit {

  medidor: MedidorMD30;

  constructor(private medidorService: MedidorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.medidorService.readByID(id).subscribe(medidor => this.medidor = medidor);
  }

  deleteMedidor(): void {
    this.medidorService.delete(this.medidor.id).subscribe(() => {
      this.medidorService.showMessage("Medidor deletado com sucesso");
      this.router.navigate(['/medidores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medidores']);
  }
}
