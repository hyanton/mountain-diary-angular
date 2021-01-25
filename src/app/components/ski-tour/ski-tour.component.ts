import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SkiTouring } from 'src/app/interface/ski-touring';
import { Test } from 'src/app/interface/test';


@Component({
  selector: 'app-ski-tour',
  templateUrl: './ski-tour.component.html',
  styleUrls: ['./ski-tour.component.scss']
})
export class SkiTourComponent implements OnInit, OnChanges {
  @Input() data!: SkiTouring;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // console.log(this.data.date, typeof(this.data.date))
  }

}
