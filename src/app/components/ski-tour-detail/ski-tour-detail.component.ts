import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiTouringService } from 'src/app/services/SkiTouringService/ski-touring.service';
import { SkiTouring } from 'src/app/interface/ski-touring';

@Component({
  selector: 'app-ski-tour-detail',
  templateUrl: './ski-tour-detail.component.html',
  styleUrls: ['./ski-tour-detail.component.scss']
})
export class SkiTourDetailComponent implements OnInit {
  id!: string | null;
  data!: SkiTouring | null;

  constructor(
    private route: ActivatedRoute,
    private skiTouringService: SkiTouringService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.skiTouringService.getSkiTour(this.id)
      .subscribe(
        (data: SkiTouring) => {
          this.data = data;
          
          if(this.data.topo_link.includes('www.camptocamp.org')){
            console.log('C2C')
          }
        }
      );
    }
  }

}
