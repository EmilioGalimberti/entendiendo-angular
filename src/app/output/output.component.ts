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
