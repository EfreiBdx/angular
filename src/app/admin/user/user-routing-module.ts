import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Uindex } from './uindex/uindex';
import { Uedit } from './uedit/uedit';
import { Uadd } from './uadd/uadd';
import { Udelete } from './udelete/udelete';

const routes: Routes = [
  { path: '', component: Uindex},
  { path: 'edit/:uid', component: Uedit},
  { path: 'add', component: Uadd},
  { path: 'delete/:uid', component: Udelete}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
