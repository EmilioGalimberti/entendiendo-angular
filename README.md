
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

# entendiendo-angular

# ===========CAPITULO 2==========

### 2

 "empezando https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/capitulo-2-primeros-pasos"

### <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/capitulo-22-mi-primera-app">2.2 primeros pasos basicos</a>



" TS, importa "algo", que casualmente se llama componente, lo que quiere decir es que va a traer de "angular => core" la funcionalidad de componente.

Lo que se ve con un "@" (arroba) es un decorador (que es el componente) que lo que va a hacer en un modo simple de definir, es una serie de metadata para el navegador... Como por ejemplo como se llama el tag del componente, que es el selector (en nuestro caso serial pero al annotation solo le tenemos que pasar el contenido no los < > ) , como asi le damos un template osea una "pedazo" de HTML para que tenga una estructura web... y luego exporta una clase que simplemente crea una variable del nombre "name" y le asigna el valor "Angular"...

Muy bien, ya te diste cuenta no? El " { { } } " ( si doble llave, que lo podriamos llamar de muchas formas, para nosotros va a ser doble llave) es lo que une el HTML o Template con la Clase... por lo tanto, cuando escribimos en nuestro template _ _lo que va a hacer Angular es buscar una variable en la clase correspondiente con el mismo nombre (respetando mayusculas y minusculas ) y unir el contenido de la variable con la vista del template."


### <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/23-angular-cli">2.3 ANGULAR CLI </a>



npm install -g angular-cli

ng new entendiendo-angular

ng serve

### COMANDOS
Las tareas que vamos a poder hacer con el CLI son:
* Crear una aplicación => ng new NombreAPP
* Crear un componente => ng g component mi-componente
* Crear una directiva => ng g directive mi-directiva
* Crear un pipe => ng g pipe mi-pype
* Crear un servicio => ng g service mi-servicio
* Cear una clase => ng g class mi-clase
* Crear una interfaz => ng g interface mi-interface
* Crear un enumerador => ng g enum mi-enumerador
* Crear un modulo => ng g module mi-modulo
* Hacer un build => ng build
* Ejecutar los test => ng test
* Ejecutar los e2e => ng e2e
* Deploy en githubpage => ng github-page:deploy --message "esto es un mensaje opcional"
* Ejecutar tsLint => ng lint
* Setear y procesar SASS => ng set defaults.styleExt scss
* Ejecutar un server local => ng serve
* Ejecutar un server con ssl => ng serve --ssl true

### <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/24-arquitectura-de-una-angular-webapp">2.4 - Estructura de una AngularWebAPP (carpetas)</a>

### <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-2-primeros-pasos/25-directivas"> 2.5 - DIRECTIVAS (NgIf,NgSwitch...)</a>

# <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-3-componentes/capitulo-3-componentes">3 - Componentes</a>

# <a href="https://jorgeucano.gitbook.io/entendiendo-angular/capitulo-6-directivas/capitulo-5-directivass">6 - Directivas</a>