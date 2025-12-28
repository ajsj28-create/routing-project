import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ifair } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fairs-detail',
  templateUrl: './fairs-detail.component.html',
  styleUrls: ['./fairs-detail.component.scss']
})
export class FairsDetailComponent implements OnInit {

  selectedFairObj!: Ifair;

  constructor(
    private _fairsService: FairsService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSelectedFair()
  }

  getSelectedFair(){
    this._activatedRoute.params.subscribe(res => {
      let id = res['id']
      this._fairsService.fetchFair(id).subscribe(res => {
        this.selectedFairObj = res
      })
    })
  }

}
