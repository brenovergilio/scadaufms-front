import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService, ) {
    headerService.headerData = {
      title: 'Simular Faturas',
      icon: 'attach_money',
      routeUrl: '/simulate'
    }
   }

  ngOnInit(): void {
  }

  navigateToEditTaxes(): void {
    this.router.navigate(['simulate/edit-taxes']);
  }
}
