import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bg_image_path: string = '/assets/img/home_background.jpg';

  constructor() {  
  }

  ngOnInit(): void {
  }

}
