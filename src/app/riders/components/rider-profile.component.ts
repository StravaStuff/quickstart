import { Component } from '@angular/core';

import { Rider } from '../rider';

@Component({
  selector: 'rider-profile',
  template:
  `<div *ngIf="rider">
      <h2>{{rider.name}} details!</h2>
      <div><label>id: </label>{{rider.id}}</div>
  </div>`
})
export class RiderProfileComponent {
  rider: Rider;
}
