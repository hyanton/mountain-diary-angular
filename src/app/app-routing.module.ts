import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MountainDiaryComponent } from './components/mountain-diary/mountain-diary.component';
import { SkiTourDetailComponent } from './components/ski-tour-detail/ski-tour-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mountain-diary', component: MountainDiaryComponent},
  {path: 'ski_tour/:id', component: SkiTourDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
