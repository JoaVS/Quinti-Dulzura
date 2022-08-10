import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alerting:boolean = false
  whatsapp(){
    this.alerting = true
    console.log(this.alerting)
    var TempText = document.createElement("input");
    TempText.value = "3834233099";
    document.body.appendChild(TempText);
    TempText.select();
    document.execCommand("copy");
    document.body.removeChild(TempText);
    setTimeout(() => {
      this.alerting = false
      console.log(this.alerting)
    }, 1500);
  }
}
