import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Scaffale } from './scaffale/scaffale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Scaffale],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-flores-fabio-b');
}
