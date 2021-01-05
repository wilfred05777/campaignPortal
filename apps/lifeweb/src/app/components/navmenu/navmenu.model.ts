import {MenuItem} from "primeng/api/menuitem";

export const memberMenu: MenuItem[] = [
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
];
export const guestMenu: MenuItem[] = [
  {
    label: 'EvoDynamic',
    icon: 'pi pi-fw pi-eject',
    url: 'https://evodynamic.com',
  }
];
