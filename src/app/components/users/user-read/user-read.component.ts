import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { UserReadDataSource } from './user-read-datasource';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<User>;
  dataSource: UserReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'type', 'actions'];

  constructor(private userService: UsersService) {
    this.dataSource = new UserReadDataSource();
    this.userService.read().subscribe(users => {
      this.dataSource.data = users.map(user => {
         return {
           id: user.id,
           username: user.username,
           password: user.password,
           type: user.type === 1 ? 'Administrador' : 'Visitante'
         }
       });
       this.paginator._changePageSize(this.paginator.pageSize); 
     });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
