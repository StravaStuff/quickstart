import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { RiderProfileComponent } from './riders/components/rider-profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RiderProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
