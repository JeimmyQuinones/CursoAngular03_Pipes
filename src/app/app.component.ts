import { Component } from '@angular/core';
import { promise } from 'protractor';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre :string ="Capitan america";
  nombre2 :string ="JeImmY qUiÑoNeS";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  Pi:number=Math.PI;
  porcentaje:number=0.2553;
  salario:number=1234.5;
  video:string="https://www.youtube.com/embed/6eLohjHhZXo";
  valorpromesa= new Promise<string>((resolve)=>{
      setTimeout(()=>{
        resolve("llego la data");
      },4500);
  });
  fecha:Date=  new Date();

  HEROE={
    NOMBRE:'logan',
  clave:'Wolverine',
  edad:500,
  direccion:{
    calle:"primera",
    casa:"20"
  }
  }

}
