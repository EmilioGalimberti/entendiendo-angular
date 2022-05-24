/*Capaz que una de las grandes mejoras en las betas y RC, fue el manejo del NgModule...
Este es quien maneja los hilos de la aplicación, es quien lleva la batuta , basicamente es quien 
orquesta a nuestra aplicación en Angular.
NgModule es la unidad de compilación y distribución de los componentes y pipes de Angular. 
En muchas cosas es similar a los modulos de ES6, porque tenemos declaraciones, imports, y exports.*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { CustomDirectivesDirective } from './customDirectives/custom-directives.directive';



/*NgModule es un decorador que se utiliza en app.module.ts  @NgModule toma un objeto de metadatos 
que indica a Angular cómo compilar y ejecutar código de módulo*/
@NgModule({
  /*Declarations: este arreglo sirve para incluir todos los Componentes que creamos a lo largo de 
  nuestro desarrollo para poder utilizarlo, si no declaramos nuestro componente, 
  no vamos a poder utilizarlo, ya sea por el router o por llamarlo como un tag especifico. 
  Tambien vamos a declarar nuestras Directivas*/
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    CustomDirectivesDirective,
    
  ],
  /*Imports: este arreglo va a tener "normalmente" lo que contiene  *Module , lo que quiere decir 
  es que normalmente todo lo que termina con Module va a estar ahi, normalmente son librerias y 
  funcionalidades CORE, aca va a estar la composición de la funcionalidad que vamos a utilizar... 
  Por ejemplo, RouterModule lo importamos para poder utilizar el router de Angular, y con el 
  foorRoot le indicamos un tipo de objeto que tiene las rutas de cada uno de los componentes.*/
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /*Providers: aquí tendremos otro arreglo en el cual vamos a poner todos nuestros servicios, 
  nuestros providers, todo lo que contenga "@Injectable", estos servicios se levantan en el
   momento que se crea la APP en el navegador y son singletons, esto quiere decir que se 
   instancian en una porción de memoria y se mantienen ahi hasta que se termine la app.*/
  providers: [],
  /*Bootstrap: Este arreglo va a tener nuestro componente inicial, nuestro "Init" por decirlo de 
  alguna manera... donde vamos a tener el router por ejemplo... quien sea el contenedor inicial 
  para nuestra aplicación.*/
  bootstrap: [AppComponent]
})
export class AppModule { }

/*"... ayudan a organizar una aplicación en bloques cohesivos de funcionalidad" .. 
esta claro, nos ayudan a ser cohesivos y funcionales...
Por lo tanto, este archivo lo vamos a tener abierto a lo largo de nuestro desarrollo 
( algunas veces nos dara dolor de cabeza) pero sabemos que si este archivo no esta actualizado 
la app no funciona :-D ... primer punto para ver*/