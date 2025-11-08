import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cassetta',
  imports: [],
  templateUrl: './cassetta.html',
  styleUrl: './cassetta.css',
})
export class Cassetta {
  @Input() name: string = "";

  vettore2: string[];
  constructor() {
    this.vettore2 = ["banane", "pere", "patate", "uva", "mango"]
  }
}
