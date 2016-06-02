import { Component, EventEmitter } from 'angular2/core';
import {CD} from "./cd.model";


@Component({
  selector: 'cd-Store',
  inputs: ['CD'], //coming from parent
  template: `
   <div class = "storeOutput">
      <h3>{{CD.name}}</h3>
      <li>$ {{CD.price}}</li>
  </div>
  `
})

export class StoreCDComponent {
  public CD: CD;
  
  constructor() {
  }


}
