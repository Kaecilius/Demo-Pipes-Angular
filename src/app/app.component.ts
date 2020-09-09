import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan america';
  nombre2: string = 'aLex yoVERa loAYZA';
  videourl:string = 'https://www.youtube.com/embed/VAWPrQ-Pc6U'
  activar: boolean = true;
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  pi: number = Math.PI;
  porcentaje: number = 0.25656;
  salario:number = 1234.6;
  fecha:Date = new Date();
  idioma:string = 'en';

  
  cambiarValor(){

    this.activar = !this.activar;
  }
  cambiarIdioma(idioma:string){
      console.log('hola desde funcion cambiar idioma')
      console.log(idioma);
      this.idioma = idioma;
  }

  valorPromesa = new Promise<string>( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('llego la data');
    },4500);
  });


  heroe = {
    nombre:'spiderman',
    clave:'perter parker',
    edad:'25',
    direccion:{
      calle:'new york',
      edificio:'3c'
    }
  }


}
