import { Component, EventEmitter } from 'angular2/core';
import {CD} from "./cd.model";

@Component({
  selector: 'selectedCD',
  inputs: ['CD'], //coming from parent
  template: `

     <div class = "cd">
     <img src = "../resources/images/note.png" height = "80" width = "100">
     <input *ngIf="CD.store" type="checkbox" checked (click)="toggleStore(false)"/>
     <input *ngIf="!CD.store" type="checkbox" (click)="toggleStore(true)"/>
      <h3>{{CD.name}}</h3>
      <li>{{CD.artist}}</li>
      <li>{{CD.price}}</li>
      <li>{{CD.genre}}</li>
    </div>

  `
})

export class selectedCDComponent {
  public CD: CD;

  constructor() {
  }

  toggleStore(status: boolean): void {
    this.CD.store = status;
  }
}
