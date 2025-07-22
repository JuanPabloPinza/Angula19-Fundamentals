import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular'; // OJO: Se importa KeycloakService aquí

// En la v19 y superiores, aunque se inyecta la instancia de keycloak-js,
// el guard y otras utilidades aún usan KeycloakService por debajo para acceder
// a la instancia y estado de autenticación de forma consistente.
// (Nota: Esto es una simplificación de la librería, el `createAuthGuard` sería otra vía)
// Para un ejemplo simple, este enfoque es claro.

export const AuthGuard: CanActivateFn = (route, state) => {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  // Si el usuario está autenticado, permite el acceso
  if (keycloak.isLoggedIn()) {
    // Si la ruta requiere roles específicos...
    const requiredRoles = route.data['roles'];
    if (requiredRoles && requiredRoles.length > 0) {
      // Si el usuario no tiene al menos uno de los roles, no le dejamos pasar
      if (!requiredRoles.some((role: string) => keycloak.getUserRoles().includes(role))) {
        // Podrías redirigir a una página de 'acceso denegado'
        router.navigate(['/']); 
        return false;
      }
    }
    return true; // Acceso permitido
  }

  // Si no está autenticado, inicia el proceso de login
  keycloak.login({
    redirectUri: window.location.origin + state.url,
  });

  return false;
};