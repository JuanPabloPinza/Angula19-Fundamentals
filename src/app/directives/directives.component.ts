import { Component } from '@angular/core';

//Este es un component directive el cuál es un decorador @Componente dónde se define la metadata del selector, imports que se usarán, de dónde sale el template que se renderizará en el DOM, y los stilos
@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})

//Directiva Estructural | Structural Directive:
//Modifica la apariencia y comportamiento de un elemento, componente u otra directiva.
//Ejemplos
// NgIf: Condicional que dice si aparece o no un elemento en base a un condicional
// NgFor: Repetir un nodo por cada uno de los elementos de una lista
// NgSwitch: Añade o remueve elementos del DOM basados en una expresión switch.

//Attribute Directive:
// Estos no modifican el DOM, sinó se modifican los elementos de sí mismos
// Ejemplos
// NgClass: añade o remueve CSS
// ngStyle: Añade o remueve estilos del HTML.
// ngModel: Permite añadir two-way data binding
export class DirectivesComponent {

}
