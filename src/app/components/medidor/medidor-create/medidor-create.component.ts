import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedidorMD30 } from '../medidor.model';
import { MedidorService } from '../medidor.service';
import { formatIP } from '../helpers';

@Component({
  selector: 'app-medidor-create',
  templateUrl: './medidor-create.component.html',
  styleUrls: ['./medidor-create.component.css']
})
export class MedidorCreateComponent implements OnInit {

  medidor: MedidorMD30 = {
    ip: '',
    name: '',
    port: null,
    rush: {
      hour: 17,
      minute: 30,
      interval: 3
    }
  } 

  initialRushHour: string;

  constructor(private medidorService: MedidorService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedidor(): void {
    this.medidor.ip = formatIP(this.medidor.ip);
    this.updateInitialRushHourBeforeSendingRequest();
    const medidorForRequest = { id: this.medidor.id, ip: this.medidor.ip, name: this.medidor.name, port: Number(this.medidor.port), rushHour: this.medidor.rush.hour, rushMinute: this.medidor.rush.minute, rushInterval: this.medidor.rush.interval };
    this.medidorService.create(medidorForRequest).subscribe(() => {
      this.medidorService.showMessage("Medidor adicionado!");
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
    if(this.initialRushHour) {
      const piecesOfInitialRushHour = this.initialRushHour.split(':');
      this.medidor.rush.hour = Number.parseInt(piecesOfInitialRushHour[0]);
      this.medidor.rush.minute = Number.parseInt(piecesOfInitialRushHour[1]);
    }
  }
}