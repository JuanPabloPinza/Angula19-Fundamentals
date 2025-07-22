import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string = "Aprendiendo";
  topic: string = "xd";
  value: string = "Comida";
  random: string = "";

  onSave(){
    alert('Data guardad con éxito')
  }

  onChange(){
    alert('Cambio')
  }
}
