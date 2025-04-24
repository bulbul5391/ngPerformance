import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackByElementsComponent } from './track-by-elements/track-by-elements.component';

const routes: Routes = [
  { 
    path: 'track-by', 
    component: TrackByElementsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
