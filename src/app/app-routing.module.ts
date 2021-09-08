import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KundenComponent} from "./kunden/kunden.component";
import {KundeComponent} from "./kunde/kunde.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: 'clients',
    component: KundenComponent
  },
  {
    path: 'clients/neu',
    component: KundeComponent
  },
  {
    path: 'clients/:id',
    component: KundeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
