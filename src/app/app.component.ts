import { Component, OnInit } from '@angular/core';
import { ItemscrudService } from './services/itemscrud.service';

@Component({
  selector: 'app-root',
  template: `
  <app-navs></app-navs>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Quinti Dulzura';
  constructor(private readonly crud:ItemscrudService){}
  ngOnInit(): void {
    this.crud.obtainItems();
  }
}
