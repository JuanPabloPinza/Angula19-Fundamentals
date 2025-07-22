import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-for',
  imports: [NgFor],
  templateUrl: './structural-directives-for.component.html',
  styleUrl: './structural-directives-for.component.css'
})
export class StructuralDirectivesForComponent {
  lista: any[] = [
    {
      id: 1,
      nombre: 'Juan',
      edad: 25,
      activo: true
    },
    {
      id: 2,
      nombre: 'Ana',
      edad: 30,
      activo: false
    },
  ]

}
