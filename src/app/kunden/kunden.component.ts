import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ClientSearchRequest, Kunde, RestApplicationClient} from "../../gen/rest-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kunden',
  templateUrl: './kunden.component.html',
  styleUrls: ['./kunden.component.css']
})
export class KundenComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Kunde>;
  public dataSource: Kunde[] = [];
  public dataSource2: Kunde[] = [];
  clickedRows = new Set<Kunde>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'vorname'];
  public request: ClientSearchRequest = {nachname: "", nummer: 0, vorname: ""};

  constructor(private backendService: RestApplicationClient, private router: Router) {
  }

  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.suche();
  }

  suche() {
    this.backendService.searchClients(this.request).subscribe(response => {
      this.dataSource = response.kunden;
      this.dataSource2 = response.kunden;
      this.table.renderRows();
      //this.dataSource.data.push(response.kunden);
      console.log(response.kunden);
    })
  }

  anzeigen(row: Kunde) {
    this.router.navigate(['clients/' + row.id]);
  }
}
