import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectivesNgifVsIfComponenteComponent } from './structural-directives-ngif-vs-if.componente/structural-directives-ngif-vs-if.componente.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    UserComponent,
    DataBindingComponent,
    DirectivesComponent,
  StructuralDirectivesNgifVsIfComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
}
