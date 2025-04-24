import { Component, OnInit } from '@angular/core';
import { TrackByElementsService } from '../../services/track-by-elements.service';
import { TrackByElements } from 'src/app/models/track-by-elements';

@Component({
  selector: 'app-track-by-elements',
  templateUrl: './track-by-elements.component.html',
  styleUrls: ['./track-by-elements.component.sass']
})
export class TrackByElementsComponent implements OnInit {

  ELEMENT_DATA:TrackByElements[] = [];
  constructor(private trackService:TrackByElementsService) { }

  ngOnInit(): void {
    this.ELEMENT_DATA = this.trackService.getInitialData();
  }

  updateData(){
    this.ELEMENT_DATA = this.trackService.getUpdatedData();
  }

  trackByElement(index:number, item:TrackByElements): number{
    return item.weight
  }

}
