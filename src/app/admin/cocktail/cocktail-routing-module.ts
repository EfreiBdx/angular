import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cindex } from './cindex/cindex';
import { Cedit } from './cedit/cedit';
import { Cadd } from './cadd/cadd';
import { Cdelete } from './cdelete/cdelete';

const routes: Routes = [
  { path: '', component: Cindex },
  { path: 'edit/:cid', component: Cedit},
  { path: 'add', component: Cadd},
  { path: 'delete/:cid', component: Cdelete}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
