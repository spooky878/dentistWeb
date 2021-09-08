import {Component, OnInit} from '@angular/core';
import {ClientSearchRequest, Kunde, RestApplicationClient} from "../../gen/rest-api";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  private kunden: Kunde[] = [];

  constructor(private restClient: RestApplicationClient) {
  }

  ngOnInit(): void {
    let request: ClientSearchRequest = Object.create({});
    request.vorname = "Roger";
    this.restClient.searchClients(request).subscribe(result => {
      this.kunden = result.kunden;
    }, error => {
      console.error(error)
    });
  }

}
