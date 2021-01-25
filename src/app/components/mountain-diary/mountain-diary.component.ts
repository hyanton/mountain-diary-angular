import { Component, OnInit } from '@angular/core';
import { SkiTouringService } from 'src/app/services/SkiTouringService/ski-touring.service';
import { SkiTouring, SkiTouringBackendAnswer } from 'src/app/interface/ski-touring';
import { Test } from 'src/app/interface/test';

@Component({
  selector: 'app-mountain-diary',
  templateUrl: './mountain-diary.component.html',
  styleUrls: ['./mountain-diary.component.scss']
})
export class MountainDiaryComponent implements OnInit {
  ski_tours!: SkiTouring[];
  tests!: Test[];

  constructor(private skiTouringService: SkiTouringService) {
  }

  ngOnInit(): void {
    // console.log('ngOnInit MountainDiaryComponent');
    
    this.skiTouringService.getSkiTours()
    .subscribe(
      (data: SkiTouringBackendAnswer) => {
        const temp = <SkiTouringBackendAnswer>data
        this.ski_tours = temp.data
      }
    );

    /*this.skiTouringService.getTests()
    .subscribe(
      (data) => {
        console.log('data received for all tests');
        console.log(typeof((data)));
        //console.log(response.body);
        // console.log(response.json());
        this.tests = JSON.parse(JSON.stringify(data)).data
        // this.tests = [];
        console.log('My tests list:', this.tests);
      }
    )*/
  }
}
