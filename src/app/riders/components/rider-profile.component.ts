import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Rider } from '../rider';
import { RiderService } from  '../../riders/services/rider.service'

@Component({
  selector: 'rider-profile',
  templateUrl: '../../templates/rider-profile.component.html'
})
export class RiderProfileComponent implements OnInit {
  rider: Rider;

    constructor(
    private riderService: RiderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
    ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.riderService.getRider(+params['id']))
      .subscribe(rider => this.rider = rider);
  }
}
