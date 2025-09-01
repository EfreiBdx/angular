import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing-module';
import { Cindex } from './cindex/cindex';
import { Cadd } from './cadd/cadd';
import { Cedit } from './cedit/cedit';
import { Cdelete } from './cdelete/cdelete';


@NgModule({
  declarations: [
    Cindex,
    Cadd,
    Cedit,
    Cdelete
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule
  ]
})
export class CocktailModule { }
