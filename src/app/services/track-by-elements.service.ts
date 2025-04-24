import { Injectable } from '@angular/core';
import { TrackByElements } from '../models/track-by-elements';

@Injectable({
  providedIn: 'root'
})
export class TrackByElementsService {

  constructor() { }

  private initialData: TrackByElements[] = [
    { weight: 72, name: 'Bulbul' },
    { weight: 32, name: 'Rishee' },
    { weight: 12, name: 'Eshika' },
    { weight: 85, name: 'Ayan' },
    { weight: 54, name: 'Nadia' },
    { weight: 68, name: 'Siam' },
    { weight: 45, name: 'Mahi' },
    { weight: 90, name: 'Tanvir' },
    { weight: 37, name: 'Rafi' },
    { weight: 63, name: 'Rima' }
  ];

  private updatedData: TrackByElements[] = [
    //...this.initialData,
    { weight: 72, name: 'Bulbul' },
    { weight: 32, name: 'Rishee' },
    { weight: 12, name: 'Eshika' },
    { weight: 85, name: 'Ayan' },
    { weight: 54, name: 'Nadia' },
    { weight: 68, name: 'Siam' },
    { weight: 45, name: 'Mahi' },
    { weight: 90, name: 'Tanvir' },
    { weight: 37, name: 'Rafi' },
    { weight: 63, name: 'Rima' },
    { weight: 58, name: 'Fahim' },
    { weight: 76, name: 'Tania' },
    { weight: 50, name: 'Sabbir' },
    { weight: 41, name: 'Nishat' },
    { weight: 70, name: 'Zara' },
    { weight: 80, name: 'Arman' },
    { weight: 60, name: 'Lima' },
    { weight: 55, name: 'Sakib' },
    { weight: 65, name: 'Rasel' },
    { weight: 48, name: 'Moushumi' }
  ];

  getInitialData(): TrackByElements[] {
    return this.initialData;
  }

  getUpdatedData(): TrackByElements[] {
    return this.updatedData;
  }
}
