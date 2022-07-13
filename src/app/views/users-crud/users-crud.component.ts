import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Usuários',
      icon: 'group',
      routeUrl: '/users'
    }
   }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['users/create']);
  }

}
