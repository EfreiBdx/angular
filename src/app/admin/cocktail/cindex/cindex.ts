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
    this.cocktailService.trashCocktail(cid).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

  unTrash(cid: number | undefined): void{
    console.log(cid)
    this.cocktailService.untrashCocktail(cid).subscribe(
      () => {
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

  hardDel(cid: number | undefined): void{
    console.log(cid)
    this.cocktailService.deleteCocktail(cid).subscribe(
      () => {
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }
}
