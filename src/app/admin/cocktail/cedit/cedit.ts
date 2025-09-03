import { HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICocktail } from '../../../_interfaces/cocktail';
import { Cocktail } from '../../../_services/cocktail';

@Component({
  selector: 'app-cedit',
  standalone: false,
  templateUrl: './cedit.html',
  styleUrl: './cedit.css'
})
export class Cedit implements OnInit {

  // constructor(private activated: ActivatedRoute){}
  private activated = inject(ActivatedRoute)
  private cocktailService = inject(Cocktail)

  cocktail: ICocktail = {
    id: 0,
    user_id: 0,
    nom: '',
    description: '',
    recette: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: ''

  }

  ngOnInit(): void {
    // let cid = this.activated.snapshot.paramMap.get('cid')
    // console.log(cid)
    // console.log( typeof cid)

    this.activated.params.subscribe(param => {
      console.log(param)
      console.log(param['cid'])
      console.log(typeof param['cid'])

      //  console.log(+param['cid'])
      //  console.log(typeof +param['cid'])

      // Subscribe d'avant
      // this.cocktailService.getCocktail(param['cid']).subscribe(
      //   data => {
      //     console.log(data)
      //     this.cocktail = data.data
      //   },
      //   err => console.log(err)
      // )

      // Format préconisé par rxjs
      this.cocktailService.getCocktail(param['cid']).subscribe({
        next: data => {
          console.log(data)
          this.cocktail = data.data
        },
        error: err => console.log(err)
      })
    })
  }

  onSubmit(): void {
    console.log(this.cocktail)
    this.cocktailService.updateCocktail(this.cocktail).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
