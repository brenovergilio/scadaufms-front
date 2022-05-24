import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-feriado-crud',
  templateUrl: './alarmes-crud.component.html',
  styleUrls: ['./alarmes-crud.component.css']
})
export class AlarmesCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Alarmes',
      icon: 'alarm',
      routeUrl: '/alarmes'
    }
   }

  ngOnInit(): void {
  }
}
