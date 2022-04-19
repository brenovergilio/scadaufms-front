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
    port: null
  } 

  constructor(private medidorService: MedidorService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedidor(): void {
    this.medidor.ip = this.formatIP(this.medidor.ip);
    this.medidorService.create(this.medidor).subscribe(() => {
      this.medidorService.showMessage("Medidor adicionado!");
      this.router.navigate(['/medidores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/medidores']);
  }

  /* Recebe um IPv4 e o formata para o padrão aceito pelo sistema operacional
  Ex: '   000.230.090.001 ' resulta em '0.230.90.1
  */

  formatIP(ip: string): string {
    ip = ip.trim();
    const pieces = ip.split('.');
    let formated_ip = '';

    for(const piece of pieces) {
        if(piece.length === 1)
            formated_ip = formated_ip.concat(piece[0])
        else if(piece.length === 2)
            if(piece[0] !== '0')
                formated_ip = formated_ip.concat(piece[0], piece[1])
            else
                formated_ip = formated_ip.concat(piece[1])
        else
            if(piece[0] !== '0')
                formated_ip = formated_ip.concat(piece[0], piece[1], piece[2])
            else if(piece[1] !== '0')
                formated_ip = formated_ip.concat(piece[1], piece[2])
            else
                formated_ip = formated_ip.concat(piece[2])
        
        formated_ip = formated_ip.concat('.')        
    }
    return formated_ip.slice(0, formated_ip.length-1)
  }
}
