import { Component, input } from '@angular/core';

@Component({
  selector: 'app-aheader',
  standalone: false,
  templateUrl: './aheader.html',
  styleUrl: './aheader.css'
})
export class Aheader {
  marcel = input<Number>()
}
