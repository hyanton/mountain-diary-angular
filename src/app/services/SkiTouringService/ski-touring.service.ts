import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { SkiTouring, SkiTouringBackendAnswer } from 'src/app/interface/ski-touring';
import { Test } from 'src/app/interface/test';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SkiTouringService {
  base_api_url: string;
  api_ski_tours_path: string;
  api_tests_path: string;

  constructor(private httpClient: HttpClient) {
    this.base_api_url = environment.api_base_url;
    this.api_ski_tours_path = environment.api_ski_tours_path;
    this.api_tests_path = environment.api_tests_path
  }

  public getSkiTours(): Observable<SkiTouringBackendAnswer> {
    // console.log('getSkiTours method');
    return this.httpClient
    .get<SkiTouringBackendAnswer>(this.base_api_url + this.api_ski_tours_path)
  }

  public getSkiTour(id: string): Observable<SkiTouring> {
    // console.log('getSkiTour method');
    return this.httpClient
    .get<SkiTouring>(this.base_api_url + this.api_ski_tours_path + '/' + id)
  }

  /*public getTests(): Observable<any> {
    console.log('getTests method');
    return this.httpClient
    .get<any>(this.base_api_url + this.api_tests_path)
  }*/
}
