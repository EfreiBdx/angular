import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Playout } from './playout/playout';
import { Home } from './home/home';
import { Cocktail } from './cocktail/cocktail';
import { Contact } from './contact/contact';

const routes: Routes = [
  {
    path: '', component: Playout, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},

      { path: 'home', component: Home },
      { path: 'cocktail', component: Cocktail },
      { path: 'contact', component: Contact }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
