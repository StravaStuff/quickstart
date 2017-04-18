import { Component } from '@angular/core';

export class Rider {
  id: number;
  name: string;
  miles: number;
};

const RIDERS: Rider[] = [
  { id: 0, name: 'Henry Winn', miles: 0 },
  { id: 1, name: 'Peyton Zeller-Av', miles: 0 }
];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <ul class="riders">
              <li *ngFor="let rider of allRiders">
                <span class="badge">{{rider.id}}</span> {{rider.name}} {{rider.miles}}
              </li>
             </ul>`
})
export class AppComponent  {
  title =  'Riders';
  allRiders = RIDERS;
}
