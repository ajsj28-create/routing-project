import { Component, OnInit } from '@angular/core';
import { fairsData } from '../../const/fairsdata';
import { Ifair } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.scss']
})
export class FairsDashComponent implements OnInit {

  fairsArray: Array<Ifair> = [];

  constructor(
    private _fairsService: FairsService
  ) { }

  ngOnInit(): void {
    this.getAllFairs()
  }

  getAllFairs(){
    this._fairsService.fetchAllFairs().subscribe(res => {
      this.fairsArray = res
    })
  }

}
