import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Uindex } from './uindex/uindex';
import { Uadd } from './uadd/uadd';
import { Uedit } from './uedit/uedit';
import { Udelete } from './udelete/udelete';



@NgModule({
  declarations: [
    Uindex,
    Uadd,
    Uedit,
    Udelete
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
