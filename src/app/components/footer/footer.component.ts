import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  github_logo_path: string;
  instagram_logo_path: string;

  //github_url: string;
  //instagram_url: string;

  constructor() {
    this.github_logo_path = environment.github_logo_path;
    this.instagram_logo_path = environment.instagram_logo_path;
  }

  ngOnInit(): void {
  }

}
