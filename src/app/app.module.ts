import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { RiderProfileComponent } from './riders/components/rider-profile.component';
import { RiderComponent } from './riders/components/rider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RiderProfileComponent, RiderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
