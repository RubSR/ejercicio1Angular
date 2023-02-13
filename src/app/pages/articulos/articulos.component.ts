import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Articulo} from "../../models/Articulo";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {


  categorias = ['1','2', '3'];

  formulario = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    categorias: [[''], Validators.required],
    stock: [0, Validators.required],
    precio: [0, Validators.required]
  });

  mostrarForm = false;

  articulosList : Articulo [] = [];
  constructor(private fb: FormBuilder) {
  }

  addArticulo() {

  if(this.formulario.invalid){
    return;
  }
    const articulo: Articulo = new Articulo(
      this.formulario.value.nombre!,
      this.formulario.value.descripcion!,
      this.formulario.value.categorias!,
      this.formulario.value.precio!,
      this.formulario.value.stock!
    );
    this.articulosList.push(articulo);
    this.formulario.reset();
    this.mostrarForm = !this.mostrarForm;

  }

  abrirFormualrio() {
    this.mostrarForm = !this.mostrarForm;
  }

  selectReligion(item: string) {
    console.log(item);
  }
}
