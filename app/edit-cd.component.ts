import { Component, EventEmitter } from 'angular2/core';
import {CD} from "./cd.model";

@Component({
  selector: 'edit-cd',
  inputs: ['CD'], //coming from parent
  template: `
<h3>Edit Album:</h3>
<input [(ngModel)]="CD.name"/> <br>
<input [(ngModel)]="CD.artist"/> <br>
<input [(ngModel)]="CD.genre"/> <br>
<input [(ngModel)]="CD.price"/> <br>
  `
})

export class EditCDComponent {
  public CD: CD;
}
