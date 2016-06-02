import { Component } from 'angular2/core';
import {CDListComponent} from "./cd.component";
import {CD} from "./cd.model";

@Component({
  selector: 'my-app',
  directives: [CDListComponent],
  template: `

    <h1><span class="ink">Ink</span>.<span class="blot">Blot</span> Records</h1>
    <cd-list [cdsList]="cds"></cd-list>

  `
})


export class AppComponent{
  public cds: CD[];

  // public genres: string[];


  constructor() {
    this.cds = [
      // new CD("Moonshine", "Van Morrison", 10.99, "classic rock"),
      // new CD("Morning View", "Incubus", 10.99, "stoner rock"),
      // new CD("Era Vulgaris", "Queens of the Stone Age", 10.99, "stoner rock"),
      // new CD("Jimmy Hendricks Experience", "Jimmy Hendrix", 10.99, "classic rock")
    ];
  }
  }
