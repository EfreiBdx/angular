import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Alayout } from './alayout/alayout';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {
    path: '', component: Alayout, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

      { path: 'dashboard', component: Dashboard},
      {
        path: 'user', loadChildren: () => import('./user/user-module')
          .then(m => m.UserModule)
      },
      {
        path: 'cocktail', loadChildren: () => import('./cocktail/cocktail-module')
          .then(m => m.CocktailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
