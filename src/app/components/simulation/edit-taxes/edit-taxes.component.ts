import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { TaxAzul, TaxVerde } from './taxes.model';

@Component({
  selector: 'app-edit-taxes',
  templateUrl: './edit-taxes.component.html',
  styleUrls: ['./edit-taxes.component.css']
})
export class EditTaxesComponent implements OnInit {

  taxAzul: TaxAzul;
  taxVerde: TaxVerde;

  constructor(private simulationService: SimulationService, private router: Router) {
    this.simulationService.readTaxAzul().subscribe(taxAzul => {
      this.taxAzul = taxAzul;
    });
    this.simulationService.readTaxVerde().subscribe(taxVerde => {
      this.taxVerde = taxVerde;
    });
   }

  ngOnInit(): void {
  }

  updateAzul(): void {
    this.convertFieldsToNumber();
    this.simulationService.updateTax(this.taxAzul).subscribe(() => {
      this.simulationService.showMessage("Tarifa Atualizada!");
      window.location.reload();
    });
  }

  updateVerde(): void {
    this.convertFieldsToNumber();
    this.simulationService.updateTax(this.taxVerde).subscribe(() => {
      this.simulationService.showMessage("Tarifa Atualizada!");
      window.location.reload();
    });
  }

  cancel(): void {
    this.router.navigate(['/simulate']);
  }

  convertFieldsToNumber(): void {
    this.taxAzul = new TaxAzul(+this.taxAzul.demandaPonta, +this.taxAzul.demandaForaPonta, +this.taxAzul.consumoPonta, +this.taxAzul.consumoForaPonta);
    this.taxVerde = new TaxVerde(+this.taxVerde.demandaUnica, +this.taxVerde.consumoPonta, +this.taxVerde.consumoForaPonta);  
  }
}
