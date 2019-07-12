import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre="jaime andrés";
  arreglo=[1,2,3,4,5,6,7,8,9,10];

  PI=Math.PI;

  soyNumero = 0.234;

  salario = 12340.5678;

  heroe = {
  	nombre: "Logan",
  	clave: "Wolverine",
  	edad: "500",
  	direccion: {
  		calle: "primera",
  		casa: "9"
  	}
  }

}
