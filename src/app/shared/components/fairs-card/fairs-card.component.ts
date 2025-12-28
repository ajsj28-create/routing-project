import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fairs';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {

  @Input() inpCardObj!: Ifair;

  constructor() { }

  ngOnInit(): void {
  }

}
