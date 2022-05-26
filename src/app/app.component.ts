//basic component

import { Component} from '@angular/core'; 
/*En @angular/core => estan parte de las funcionalidades y objectos que tiene el framework, 
por lo tanto de todas las que tiene va a traer "Component".*/

//import component
import { InputComponent }  from './components/input/input.component';

import { Router } from '@angular/router';
@Component({
  /*@Component() es un annotation, es lo que hace es enriquecer a la metadata de la clase que creemos para que 
  termine siendo un componente web que el navegador entienda. Este recibe un json con datos, 
  donde los principales son:*/

  selector: 'app-root',
  /*selector => es quien se encarga del "nombre" del tag del componente... por ejemplo este es <app-root>, 
  pero solo vamos a poner el nombre, ya que de los tags se encarga angular.*/

  templateUrl: './app.component.html',
  /*template => en template (no esta en el ejemplo), podemos poner una porcion de html directo en nuestro componente,
   con los apostrofes frances ` (son de arriba a abajo, de izquierda a derecha) podemos utilizar el multilinea para 
   nuestro html.
  templateUrl => a diferencia del "template" aquí vamos a poner la dirección y el archivo donde se encuentra 
  la porcion de HTML que dara la estructura .*/

  styleUrls: ['./app.component.css']
  /*StyleUrls => aquí vamos a tener que poner un array de estilos para el componente... 
  como bien comente anteriormente tenemos un css de estilos globales, que afectan a todo el proyecto, 
  los estilos que pongas en este componente van a estar y ser utilizados solo para el mismo.*/
})

export class AppComponent {
  title = 'app works!';
 
  //Para crear una función, simplemente tenemos que indicar el nombre, que parametros reciben y que devuelve,
  miFuncion(variable:string):void{
    console.log("la variable que ingreso en nuestra funcion es :" + variable);
}

  miFuncionConDevolucion():string{
    return "Que bueno saber que tipo va a devolver";
}
//para el input NO ME FUNCiono
ids = [
  1,
 2, 
 3,
   4,
   5];    

//output
outputEmiter(miVar:string){
  console.log("el valor que vino es: ", miVar);
}

constructor(private router:Router){
}
/*Ahora cuando Angular cree "AppComponent" lo que va a pasar es que va a tener que enviarle si o si
 la funcionalidad Router (que importamos arriba) que a su vez tuvimos que tener importada en el 
 NgModule.
Entonces cuando crea el componente lo que va a pasar es que le va a pasar ese parametro, ahora 
veamos que en el codigo a direfencia de las funciones normales le agregue un "private" adelante.
Lo que va a hacer un "private" o "public" en el constructor es declarar una variable privada o 
publica dentro del componete, en el caso de que no la hagamos tendriamos que asignarla a una 
variable que nosotros hayamos creado antes.*/

}
/*Esta clase va a tener el binding con el html para dar funcionalidad en la vista, por lo tanto, 
las variables sin declarar, van a ser las variables que encontremos en el html, como asi las funciones tambien*/
