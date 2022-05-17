
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## entendiendo-angular

## ===========CAPITULO 2==========

## 2

 "empezando https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/capitulo-2-primeros-pasos"

## 2.2 

https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/capitulo-22-mi-primera-app"

"Algunas definiciones utiles: import { Component } from '@angular/core';

@Component({ selector: 'my-app', template: <h1>Hello {{name}}</h1> }) export class AppComponent { name = 'Angular'; }"

" TS, importa "algo", que casualmente se llama componente, lo que quiere decir es que va a traer de "angular => core" la funcionalidad de componente.

Lo que se ve con un "@" (arroba) es un decorador (que es el componente) que lo que va a hacer en un modo simple de definir, es una serie de metadata para el navegador... Como por ejemplo como se llama el tag del componente, que es el selector (en nuestro caso serial pero al annotation solo le tenemos que pasar el contenido no los < > ) , como asi le damos un template osea una "pedazo" de HTML para que tenga una estructura web... y luego exporta una clase que simplemente crea una variable del nombre "name" y le asigna el valor "Angular"...

Muy bien, ya te diste cuenta no? El " { { } } " ( si doble llave, que lo podriamos llamar de muchas formas, para nosotros va a ser doble llave) es lo que une el HTML o Template con la Clase... por lo tanto, cuando escribimos en nuestro template _ _lo que va a hacer Angular es buscar una variable en la clase correspondiente con el mismo nombre (respetando mayusculas y minusculas ) y unir el contenido de la variable con la vista del template."

"Instalar ANGULAR CLI"

npm install -g angular-cli

ng new entendiendo-angular