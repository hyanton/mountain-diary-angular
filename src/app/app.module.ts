import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MountainDiaryComponent } from './components/mountain-diary/mountain-diary.component';
import { SkiTourComponent } from './components/ski-tour/ski-tour.component';

import { SkiTouringService } from './services/SkiTouringService/ski-touring.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpErrorInterceptor } from 'src/app/interceptors/HttpErrorInterceptor';
import { SkiTourDetailComponent } from './components/ski-tour-detail/ski-tour-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MountainDiaryComponent,
    HomeComponent,
    SkiTourComponent,
    SkiTourDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SkiTouringService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
