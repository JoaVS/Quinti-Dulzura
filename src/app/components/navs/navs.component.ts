import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  template: `
  <nav>
    <ul>
        <li  [routerLink]="'profile'" routerLinkActive="active"><img src="assets/icons/person.svg"></li>
        <li  [routerLink]="'menu'" routerLinkActive="active"><img src="assets/icons/menu.svg"></li>
        <li [routerLink]="'contacts'" routerLinkActive="active"><img src="assets/icons/contact.svg"></li>
    </ul>
  </nav>`,
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
