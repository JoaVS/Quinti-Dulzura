import { Component, OnInit } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { ItemscrudService } from 'src/app/services/itemscrud.service';
import {menuItem} from '../../../interfaces'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private readonly crud: ItemscrudService) { }

  ngOnInit(): void {
    this.menuitems = this.crud.getItems()
    .pipe(map((e:any) => {
      if(e.length>=1){
        e.forEach( (item: any) => {
          console.log(item.combos)
          let combosarray: any[][] = []
          if(item.combos[0] != ""){
            item.combos.forEach((text:string, index:number) => {
              if(typeof text == "string"){
                let combo: any[] = text.split("$")
                combo[0] = combo[0].trimEnd()
                combo[1] = parseInt(combo[1])
                combosarray.push(combo)
              }
            });
            if(combosarray.length != 0){item.combos = combosarray}
          }
      })
      return e 
    }}))
  }
  menuitems!: Observable<any[]>
  x = [["banana", 400]]
}
