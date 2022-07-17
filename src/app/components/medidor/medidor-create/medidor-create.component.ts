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
    port: 1001,
    rush: {
      hour: 17,
      minute: 30,
      interval: 3
    }
  } 

  initialRushHour: string;

  constructor(private medidorService: MedidorService, private router: Router) { }

  ngOnInit(): void {
    this.setInitialRushHour()
  }

  createMedidor(): void {
    this.medidor.ip = formatIP(this.medidor.ip);
    this.updateInitialRushHourBeforeSendingRequest();
    const medidorForRequest = { id: this.medidor.id, ip: this.medidor.ip, name: this.medidor.name, port: this.medidor.port ? Number(this.medidor.port) : undefined, rushHour: this.medidor.rush.hour ? this.medidor.rush.hour : undefined, rushMinute: this.medidor.rush.minute ? this.medidor.rush.minute : undefined, rushInterval: this.medidor.rush.interval ? this.medidor.rush.interval : undefined };
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