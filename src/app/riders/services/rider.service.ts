import { Injectable } from '@angular/core';

import { Rider } from '../rider'
import { RIDERS } from '../constants/riders.constant'

@Injectable()
export class RiderService {
  getRiders(): Promise<Rider[]> {
    return Promise.resolve(RIDERS);
  }

  getRider(id: number): Promise<Rider> {
  return this.getRiders()
              .then(riders => riders.find(rider => rider.id === id));
}
}
