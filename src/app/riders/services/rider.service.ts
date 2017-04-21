import { Injectable } from '@angular/core';

import { Rider } from '../rider'
import { RIDERS } from '../constants/riders.constant'

@Injectable()
export class RiderService {
  getRiders(): Rider[] {
    return RIDERS;
  }
}
