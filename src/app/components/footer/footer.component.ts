import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer>
  <ul>
      <li>Vilma Sanchez Volpini</li>
      <li>Tel: 3834-233099</li>
      <li>Mail: vilclausanchez5@gmail.com</li>
  </ul>
  <ul>
      <li>Alberto Pinetta 4165</li>
      <li>Catamarca, Argentina</li>
  </ul>
  <h2>Quinti Dulzura</h2>
</footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
