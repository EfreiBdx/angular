import { Component, OnInit } from '@angular/core';
import { ICocktail } from '../../../_interfaces/cocktail';
import { Cocktail } from '../../../_services/cocktail';

@Component({
  selector: 'app-cindex',
  standalone: false,
  templateUrl: './cindex.html',
  styleUrl: './cindex.css'
})
export class Cindex implements OnInit {

  cocktailList: ICocktail[] = []

  constructor(private cocktailService : Cocktail){}

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(
      data => {
        console.log(data)
        this.cocktailList = data.data
      },
      err => console.log(err)
    )
  }

  trash(cid: number | undefined):void{
    console.log(cid)
  }

  unTrash(cid: number | undefined): void{
    console.log(cid)
  }
}
