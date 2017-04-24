import { Component } from '@angular/core';

import { Rider } from '../rider';

@Component({
  selector: 'rider-profile',
  templateUrl: `../templates/rider-profile.component.html`
})
export class RiderProfileComponent {
  rider: Rider;
}
