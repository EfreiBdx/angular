import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-alayout',
  standalone: false,
  templateUrl: './alayout.html',
  styleUrl: './alayout.css'
})
export class Alayout {
  roger = signal(50)
}
