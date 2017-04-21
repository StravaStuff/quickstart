import { Component, OnInit } from '@angular/core';

import { Rider } from './riders/rider';
import { RiderService } from  './riders/services/rider.service'

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <ul class="riders">
              <li *ngFor="let rider of riders">
                <span class="badge">{{rider.id}}</span> {{rider.name}} {{rider.miles}}
              </li>
             </ul>`,
   styles: [`
     .selected {
       background-color: #CFD8DC !important;
       color: white;
     }
     .riders {
       margin: 0 0 2em 0;
       list-style-type: none;
       padding: 0;
       width: 15em;
     }
     .riders li {
       cursor: pointer;
       position: relative;
       left: 0;
       background-color: #EEE;
       margin: .5em;
       padding: .3em 0;
       height: 1.6em;
       border-radius: 4px;
     }
     .riders li.selected:hover {
       background-color: #BBD8DC !important;
       color: white;
     }
     .riders li:hover {
       color: #607D8B;
       background-color: #DDD;
       left: .1em;
     }
     .riders .text {
       position: relative;
       top: -3px;
     }
     .riders .badge {
       display: inline-block;
       font-size: small;
       color: white;
       padding: 0.8em 0.7em 0 0.7em;
       background-color: #607D8B;
       line-height: 1em;
       position: relative;
       left: -1px;
       top: -4px;
       height: 1.8em;
       margin-right: .8em;
       border-radius: 4px 0 0 4px;
     }
   `],
   providers: [RiderService]

})
export class AppComponent implements OnInit {
  title =  'Riders';
  riders: Rider[];

  constructor(private riderService: RiderService) { }

  getRiders(): void {
    this.riders = this.riderService.getRiders();
  }

  ngOnInit(): void {
    this.getRiders();
  }

}
