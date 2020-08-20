import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng";

@Component({
  selector: 'evodlife-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'My Dashboard',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/member']
      },
      {
        label: 'EvoDynamic',
        icon: 'pi pi-fw pi-eject',
        url: 'https://evodynamic.com',
      }
    ]
  }

}
