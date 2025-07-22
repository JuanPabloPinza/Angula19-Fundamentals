import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives-ngif-vs-if',
  imports: [NgIf,FormsModule],
  templateUrl: './structural-directives-ngif-vs-if.componente.component.html',
  styleUrl: './structural-directives-ngif-vs-if.componente.component.css'
})
export class StructuralDirectivesNgifVsIfComponenteComponent {
  isChecked: boolean = true;
  isInputBox: boolean = true;
  input1: string = "";
  input2: string = "";

  hideField() {
    this.isInputBox = false;
  }

  showField() {
    this.isInputBox = true;
  }
  onClick() {
    this.isChecked = !this.isChecked;

  }
}
