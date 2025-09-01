import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing-module';
import { Home } from './home/home';
import { Cocktail } from './cocktail/cocktail';
import { Contact } from './contact/contact';
import { Playout } from './playout/playout';
import { Pheader } from './pheader/pheader';


@NgModule({
  declarations: [
    Home, Cocktail, Contact,
    Playout, Pheader
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
