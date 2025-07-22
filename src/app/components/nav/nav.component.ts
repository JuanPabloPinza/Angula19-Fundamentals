// src/app/components/nav/nav.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HasRolesDirective } from 'keycloak-angular'; // Para *kaHasRoles
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, HasRolesDirective], // Importamos la directiva y RouterLink
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  readonly keycloak = inject(Keycloak);

  login() {
    this.keycloak.login();
  }

  logout() {
  this.keycloak.logout({ redirectUri: window.location.origin });
}
}