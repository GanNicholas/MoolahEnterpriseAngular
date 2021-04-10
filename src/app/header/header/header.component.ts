import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];


  constructor() {
    this.items = new Array();
  }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'About Us',
        icon: 'pi pi-info-circle',
      },
      {
        label: 'Create Company Account',
        icon: 'pi pi-user',
      }
    ];
  }

  getMenuItems(): MenuItem[] {
    return this.items;
  }

  setMenuItems() {
    return this.items;
  }

}
