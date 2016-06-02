import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from "./cd.model";

@Pipe({
  name:"filterArtist",
  pure:false
})

export class FilterArtistPipe implements PipeTransform {
  transform(input: CD [], args){
    var desiredArtist = args[0];
    if (desiredArtist !== "Artist") {
      return input.filter(function(cd){
        return cd.artist === desiredArtist;
      });
    } else{
        return input;
      }
    }
  }
