import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Alarme } from '../alarme.model';
import { AlarmeService } from '../alarme.service';
import { AlarmeReadDataSource } from './alarme-read-datasource';

@Component({
  selector: 'app-alarme-read',
  templateUrl: './alarme-read.component.html',
  styleUrls: ['./alarme-read.component.css']
})
export class AlarmeReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Alarme>;
  dataSource: AlarmeReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['message', 'timestamp', 'actions'];

  constructor(private alarmeService: AlarmeService, private route: ActivatedRoute) {
    const medidorID = this.route.snapshot.paramMap.get('id');
    this.dataSource = new AlarmeReadDataSource();
    this.alarmeService.read(medidorID).subscribe(alarmes => {
      this.dataSource.data = alarmes.map(alarme => {
        return {
          id: alarme.id,
          measurer_id: alarme.measurer_id,
          message: alarme.message,
          timestamp: alarme.timestamp
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

  deleteAlarme(id: string): void {
    this.alarmeService.delete(id).subscribe(() => {
      this.alarmeService.showMessage("Alarme deletado com sucesso");
      window.location.reload();
    });
  }
}
