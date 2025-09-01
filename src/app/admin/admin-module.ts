import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Alayout } from './alayout/alayout';
import { Aheader } from './aheader/aheader';
import { Sidemenu } from './sidemenu/sidemenu';


@NgModule({
  declarations: [
    Dashboard,
    Alayout,
    Aheader,
    Sidemenu
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
