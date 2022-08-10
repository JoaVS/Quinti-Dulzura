import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemscrudService } from 'src/app/services/itemscrud.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private readonly fb: FormBuilder, private readonly crud:ItemscrudService) { }

  ngOnInit(): void {
    this.form = this.initForm()
    console.log(this.form)
    this.items$ = this.crud.getItems()
  }
  items$!: Observable<any>
  loading:boolean = false
  form!:any
  image!: any
  updatingid!: string
  initForm():FormGroup {
    return this.fb.group({
     name: ['', [Validators.required]],
     image: [''],
     description: ['', [Validators.required]],
     flavours: [[]],
     precio: [null, [Validators.required]],
     combos: [''],
    })
  }
  catchimage(event:any): any{
    let archivo = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(archivo)
    reader.onloadend = () => {
      this.image = reader.result
      this.form.patchValue({image: this.image})
    }
  }
  cancelupdate(){
    let result = confirm("¿Quieres descartar los cambios?")
    if(result){
      this.clear()
    }
  }
  clear(){
    this.updatingid = ""
    this.form.patchValue({name: "", image: "", description: "", combos: "", flavours: [], precio: null})
    this.image = ""
  }
  async sumbitForm(){
    this.loading = true
    let imagelink!: string
    let combos = this.form.value.combos.split("_")
    let flavours = this.form.value.flavours.split("_")
      //   Como tratar los combos para que sean arrays anidados
    await this.crud.uploadimg(this.form.value.name,this.form.value.image, this.updatingid).then((res:any) => { imagelink = res })
    this.crud.createItem(this.form.value.name, imagelink, this.form.value.description, this.form.value.precio,combos, flavours,this.updatingid)
    setTimeout(() => {
      this.clear()
    }, 1);
    this.loading = false
  }
  setItem(item:any){
    this.clear()
    this.updatingid = item.id
    this.image = item.image
    let flavours = item.flavours.toString().replace(/,/g,"_")
    this.form.patchValue({image: this.image, name: item.name, flavours: flavours, precio: item.precio})
    if(item.description != undefined || item.description != ""){
      this.form.patchValue({description: item.description})
    }
    if(item.combos != undefined || item.combos != [] ||  item.tags.length > 0){
      let combos = item.combos.toString().replace(/,/g,"_")
      this.form.patchValue({combos: combos})
    }
  }
  deleteItem(){
    let result = confirm("¿Quieres eliminar el articulo?")
    if(result){
      this.crud.deleteItems(this.updatingid)
      this.clear()
    }
  }
}
