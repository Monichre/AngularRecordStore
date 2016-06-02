import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from "./cd.model";

@Pipe({
  name:"filterGenre",
  pure:false
})
export class FilterGenrePipe implements PipeTransform {

  transform(input: CD[], args){
    var desiredGenre = args[0];
    if(desiredGenre !== "Genre"){
      return input.filter(function(cd){
        return cd.genre === desiredGenre;
      })
    } else {
      return input;
    }

  }

}
