import { Component } from '@angular/core';
import { ICocktail } from '../../../_interfaces/cocktail';
import { Cocktail } from '../../../_services/cocktail';

@Component({
  selector: 'app-cadd',
  standalone: false,
  templateUrl: './cadd.html',
  styleUrl: './cadd.css'
})
export class Cadd {

  cocktail: ICocktail = {
    user_id: 1,
    nom: '',
    description: '',
    recette: ''
  }

  constructor(private cocktailService: Cocktail){}

  onSubmit(){
    this.cocktailService.addCocktail(this.cocktail).subscribe(
      data => console.log(data.message)
    )
  }
}
