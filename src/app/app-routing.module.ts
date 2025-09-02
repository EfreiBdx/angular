import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Module de routage principal pour la documentation Compodoc
 * Ce module est uniquement utilisé pour permettre à Compodoc de générer
 * le graphique de routage. L'application utilise en réalité provideRouter.
 */

// Importez vos routes depuis app.routes.ts
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }