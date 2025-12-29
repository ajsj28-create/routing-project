import { Component, OnInit } from '@angular/core';
import { fairsData } from '../../const/fairsdata';
import { Ifair } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fairs-dash',
  templateUrl: './fairs-dash.component.html',
  styleUrls: ['./fairs-dash.component.scss']
})
export class FairsDashComponent implements OnInit {

  fairsArray: Array<Ifair> = [];

  constructor(
    private _fairsService: FairsService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllFairs()
    this._router.navigate([this.fairsArray[0].fairId], {
      relativeTo: this._activatedRoute
    })
  }

  getAllFairs(){
    this._fairsService.fetchAllFairs().subscribe(res => {
      this.fairsArray = res
    })
  }

}
