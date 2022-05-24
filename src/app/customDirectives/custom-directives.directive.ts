/*Las directivas personalizadas lo que hacen es generar directo 
una funcionalidad en base a un "atributo" ... 
en el caso de nuestro ejemplo es title-blue*/
import { Directive, ElementRef, Input } from '@angular/core';
/*Directive lo necesitamos para el Decoration, es quien va a definir que 
esto es una directiva ( tal como el de component, define que es un 
componente)...*/
/*ElementRef : es la refencia del elemento completo .. 
algo asi como hacer un "document.getElementById('ID')" y asignar eso a 
una variable...*/
/*Input : Permite que los datos fluyan de la expresión vinculante a la 
directiva...*/
@Directive({
  selector: '[appCustomDirectives]'
  //Aquí tenemos la directiva y el selector que decidimos darle.. esto luego se convierte en title-blue dentro del html
})
export class CustomDirectivesDirective {
  /*En el constructor estamos trayendo la refencia del elemento, 
  de esto se encarga Angular por nosotros, para que podamos manipularlo 
  a nuestro gusto.*/
  constructor(el: ElementRef) { 
    el.nativeElement.style.fontSize = '50px'
    el.nativeElement.style.color = 'blue'
  }
  /*Y por ultimo, la manipulación final... aquí tenemos como vamos a 
  modificar el element.. con nativeElement vamos a generar lo mismo 
  que hicimos con los [ ] ( los corchetes ) en el html directo.
Luego el nativeElement es la asignación de la que hablamos... 
que va a tomar los "atributos" nativos del elemento... 
para entenderlo de una forma mas "facil" serian "los que 
podemos modificar por CSS" por ejemplo.*/
}
