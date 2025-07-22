// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideKeycloak, includeBearerTokenInterceptor } from 'keycloak-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      includeBearerTokenInterceptor // Interceptor para añadir el token a las peticiones
    ])),

    provideKeycloak({
      // Configuración del servidor y cliente de Keycloak
      config: {
        url: 'http://localhost:8080', // URL de tu servidor Keycloak <-- CAMBIA SI ES DIFERENTE
        realm: 'angular-demo',        // Nombre de tu Realm <-- CAMBIA SI ES DIFERENTE
        clientId: 'angular-app-demo'  // Client ID que creaste <-- CAMBIA SI ES DIFERENTE
      },
      initOptions: {
        onLoad: 'check-sso', // Intenta el login silencioso al cargar la app
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      // Define a qué URLs de tu API se les debe añadir el token.
      // Si no tienes API aún, puedes dejar un ejemplo.
      // bearerInterceptorOptions: {
      //   urls: ['/api/*']
      // }
    })
  ]
};