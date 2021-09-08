import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material-module';
import {SpinnerComponent} from "./shared/spinner.component";
import {ClientsComponent} from './clients/clients.component';
import {AppSidebarComponent} from "./sidebar/sidebar.component";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RestApplicationClient} from "../gen/rest-api";
import {HttpClientAdapter} from "./services/http-client-adapter";
import {DrawingComponent} from './drawing/drawing.component';
import {KundenComponent} from './kunden/kunden.component';
import {KundeComponent} from './kunde/kunde.component';
import {ZahnstatusComponent} from './zahnstatus/zahnstatus.component';

export function RestApplicationClientFactory(http: HttpClient): RestApplicationClient {
  return new RestApplicationClient(new HttpClientAdapter(http));
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ClientsComponent,
    AppSidebarComponent,
    DrawingComponent,
    KundenComponent,
    KundeComponent,
    ZahnstatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: RestApplicationClient, useFactory: RestApplicationClientFactory,
      deps: [HttpClient]
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
