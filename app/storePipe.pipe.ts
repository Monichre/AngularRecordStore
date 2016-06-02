import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from "./cd.model";

@Pipe({
  name:"storePipe",
  pure:false
})
export class StorePipe implements PipeTransform {

  transform(input: CD[], args){
    var desiredStoreStatus = true;
      return input.filter(function(cd){
        return cd.store === desiredStoreStatus;
      })
    }
}
