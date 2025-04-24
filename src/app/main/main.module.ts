import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TrackByElementsComponent } from './track-by-elements/track-by-elements.component';


@NgModule({
  declarations: [TrackByElementsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
