import {Component, EventEmitter} from 'angular2/core';
import {CD} from './cd.model';
import {CDListComponent} from "./cd.component";

@Component ({
  selector: 'new-cd',
  outputs: ['onSubmitNewCD'],
  template: `
  <div class = "cf create">
    <h3>Create CD:</h3>
    <input placeholder="name" #name> <br>
    <input placeholder="artist" #artist> <br>
    <input placeholder="genre" #genre> <br>
    <input placeholder="price" #price> <br>
    <button (click) = "addCD(name, artist, genre, price)">Add CD</button>
  </div>
  `
})

export class NewCDComponent{
  public onSubmitNewCD: EventEmitter<CD>;
  constructor() {
    this.onSubmitNewCD = new EventEmitter();
  }

  addCD(name: HTMLInputElement, artist: HTMLInputElement, genre: HTMLInputElement, price: HTMLInputElement) {
    var newCD = new CD(name.value, artist.value, parseInt(price.value), genre.value);
    this.onSubmitNewCD.emit(newCD);
    name.value="";
    artist.value="";
    price.value="";
    genre.value="";

  }

}
