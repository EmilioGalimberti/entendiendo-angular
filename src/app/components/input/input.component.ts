//componente hijo
//entradas inputs

import { Component, Input  } from '@angular/core';
/*Ahora podriamos tener componentes dentro de componentes, y si nos ponemos a pensar es como 
super normal, imaginemos que tenemos unos datos iterables y esos tengan un componentes que 
podriamos "reutilizar" en distintos lugares de la aplicación, ya sea por su vista o su 
funcionalidad...
Estos componentes tienen interacciones y una de esas interacciones es el annotation @Input.*/
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() entrada:string = '';
  /*El annotation Input puede traer cualquier tipo de cosa, desde un string  
  un any o un objeto completo.*/

  constructor() {console.log(this.entrada) }
}
