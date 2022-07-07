import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedidorMD30 } from '../medidor.model';
import { MedidorService } from '../medidor.service';
import { formatIP } from '../helpers';

@Component({
  selector: 'app-medidor-update',
  templateUrl: './medidor-update.component.html',
  styleUrls: ['./medidor-update.component.css']
})
export class MedidorUpdateComponent implements OnInit {

  medidor: MedidorMD30;
  initialRushHour: string;

  constructor(private medidorService: MedidorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.medidorService.readByID(id).subscribe(medidor => {
      this.medidor = medidor;
      this.setInitialRushHour();
    });
  }

  updateMedidor(): void {
    this.medidor.ip = formatIP(this.medidor.ip);
    this.updateInitialRushHourBeforeSendingRequest();
    const medidorForRequest = { id: this.medidor.id, ip: this.medidor.ip, name: this.medidor.name, port: Number(this.medidor.port), rushHour: this.medidor.rush.hour, rushMinute: this.medidor.rush.minute, rushInterval: this.medidor.rush.interval };
    this.medidorService.update(medidorForRequest).subscribe(() => {
      this.medidorService.showMessage("Medidor Atualizado!");
      this.router.navigate(['/medidores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medidores']);
  }

  setInitialRushHour(): void {
    this.initialRushHour = `${this.medidor.rush.hour}:${this.medidor.rush.minute}`;
  }

  updateInitialRushHourBeforeSendingRequest(): void {
    const piecesOfInitialRushHour = this.initialRushHour.split(':');
    this.medidor.rush.hour = Number.parseInt(piecesOfInitialRushHour[0]);
    this.medidor.rush.minute = Number.parseInt(piecesOfInitialRushHour[1]);
  }
}
