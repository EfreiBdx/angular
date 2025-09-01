import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: "<div style='border: solid 1px red'>App HTML<br><router-outlet></router-outlet></div>",
})
export class App {
  protected readonly title = signal('marcel');
}
