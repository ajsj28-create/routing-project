import { Injectable } from '@angular/core';
import { Ifair } from '../models/fairs';
import { fairsData } from '../const/fairsdata';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairsService {

  fairsArray: Array<Ifair> = fairsData

  constructor() { }

  fetchAllFairs(){
    return of(this.fairsArray)
  }

  fetchFair(id: string){
    let ind = this.fairsArray.findIndex(ele => ele.fairId === id)
    return of(this.fairsArray[ind])
  }
  
}
