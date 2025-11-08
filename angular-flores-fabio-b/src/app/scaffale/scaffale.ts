import { Component } from '@angular/core';
import { Cassetta } from '../cassetta/cassetta';

@Component({
  selector: 'app-scaffale',
  imports: [Cassetta],
  templateUrl: './scaffale.html',
  styleUrl: './scaffale.css',
})
export class Scaffale {
  vettore: string[];
  constructor() {
    this.vettore = ["frutta mista", "ortagi di stagione", "frutta coi pesticidi", "frutta biologica", "frutta secca"]
  }

}
