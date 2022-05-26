/*
Primero , el componente principal va a ser quien cargue la aplicación,
  Por medio de los lifecycle vamos a poder modificar cosas 
( o determinar si se abre o no ) 
  Por medio de router vamos a poder abrir componentes dentro de otros 
(sin que sean childcomponents, expecificamente)
  Vamos a poder pasar datos entre componentes padres e hijos 
(cuantos tengamos en la rama)
  Vamos a poder manejar distintos tipos de estados
  Vamos a poder pasar datos por medio de la Inyección de dependencias 
( servicios ) 
  Generar funcionalidad encapsulada
  manejo de formularios
  Manejo de eventos en la UI
  Detección de cambios (AngularZone)
*/

// salidas outputs eventos de salida, que al pas algo, el componente hijo le enviara datos al componente padre
import { Component, Output, EventEmitter } from '@angular/core';
//estos outputs son "EventEmmiter" que van a ejecutar una funcion del componente "padre" para enviarle un dato al mismo
@Component({
  selector : 'output-component',
  template:`
          <span (click)="me()">Click ME<span>
  `
})
export class OutputComponent {

  @Output() outputEmiter = new EventEmitter<string>();

  me():void{
      this.outputEmiter.emit("Hey te estoy enviando un msj");
  } 
}
/*Entonces para recapitular, cuando creas un "Output" lo que vas a generar es un event emitter que 
lo que hace es enviar un valor del hijo al padre... Recuerda que este valor puede ser desde un 
string , un any, hasta un objeto completo.*/


/*
Los componentes deben cumplir una función única, 
si tiene mas de una se pueden hacer dos componentes 
(uno podria ser hijo del otro)
*/