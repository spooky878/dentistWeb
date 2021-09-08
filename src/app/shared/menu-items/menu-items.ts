import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: 'clients', name: 'Kunden', type: 'link', icon: 'av_timer'},
  {state: 'mytable', name: 'Tabelle', type: 'link', icon: 'av_timer'},
  {state: 'myform', name: 'Form', type: 'link', icon: 'av_timer'},
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
