import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { RiderProfileComponent } from './riders/components/rider-profile.component';
import { RiderComponent } from './riders/components/rider.component';

import { RiderService } from './riders/services/rider.service'

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  RouterModule.forRoot([
  { path: '', redirectTo: '/riders', pathMatch: 'full' },
  { path: 'riders',  component: RiderComponent },
  {
    path: 'profile/:id',
    component: RiderProfileComponent
  }
]) ],
  declarations: [ AppComponent, RiderProfileComponent, RiderComponent ],
  providers: [ RiderService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
