import { Component, EventEmitter } from 'angular2/core';
import {selectedCDComponent} from "./selectedCD.component";
import {EditCDComponent} from "./edit-cd.component";
import {CD} from "./cd.model";
import {FilterGenrePipe} from "./filterGenre.pipe";
import {FilterArtistPipe} from "./filterArtist.pipe";
import {StorePipe} from "./storePipe.pipe";
import {NewCDComponent} from "./new-cd.component";
import {StoreCDComponent} from "./cd-store.component";

@Component({
  selector: 'cd-list',
  inputs: ['cdsList'], //coming from parent
  directives:[selectedCDComponent, EditCDComponent, NewCDComponent, StoreCDComponent],
  pipes: [FilterGenrePipe, FilterArtistPipe, StorePipe],
  template: `
  <div class = "content">
    <div class = "selects">
      <select (change)="onChange2($event.target.value)">
      <option value="Artist">Artist</option> <!-- Artist Filter -->
        <option *ngFor = "#artist of artistList" value="{{artist}}">{{artist}}</option>
      </select>
      <select (change)="onChange($event.target.value)">
        <option value="Genre">Genre</option>
        <option *ngFor = "#genre of newGenreList" value="{{genre}}">{{genre}}</option>
      </select>
    </div>
    <div class = "col-xs-3">
      <new-cd (onSubmitNewCD) = "addCDToList($event)"></new-cd>
    </div>
    <div class= "cds col-xs-6">
      <selectedCD *ngFor="#cd of cdsList | filterGenre:filter | filterArtist:filter2" [CD]="cd"></selectedCD>
      <edit-cd *ngIf="selectedCD" [CD]="selectedCD"></edit-cd>
    </div>
    <div class="col-xs-3">
      <h2>Shopping Cart</h2>
      <cd-Store *ngFor="#cd of cdsList | storePipe:filter" [CD]="cd" [cdsList]="cdsList"></cd-Store>
      <div id="total">Total: $ {{total}}</div>
      <button (click) = "addEmUp()">Buy</button>
    </div>
  </div>
  `
})

// [class.selected]="cd === selectedCD"
// (click) ="cdClicked(cd)"

export class CDListComponent{
  public total: number = 0;
  public cdsList: CD[];
  public newGenreList: string[] = [];
  public artistList: string[] = [];
  public selectedCD: CD;

  public filter: string="Genre";
  public filter2: string="Artist";

  constructor() { }

  onChange(filterOption): void {
    this.filter = filterOption;
  }

  onChange2(filterOption2){
    this.filter2 = filterOption2;
  }

  noDupes(array: string[], prop: string): void{
    if(array.indexOf(prop) < 0 ){
      array.push(prop);
    } else {

    }
  }

  addCDToList(Cd: CD): void {
    console.log(this.cdsList);
    this.cdsList.push(Cd);
    this.noDupes(this.newGenreList, Cd.genre);
    this.noDupes(this.artistList, Cd.artist);
  }

  addEmUp(): number{
    for(var cd of this.cdsList){
      if(cd.store){
        this.total += cd.price;
      }
    }
    return this.total;
  }

}
