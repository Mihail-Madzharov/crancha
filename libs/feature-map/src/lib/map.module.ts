import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects, mapFeatureKey, mapReducers } from '@crancha/domain';
import {GoogleMapsModule} from '@angular/google-maps';
import { StoreModule } from '@ngrx/store';

import { MapComponent } from './map.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GoogleMapsModule,
    EffectsModule.forFeature([MapEffects]),
    StoreModule.forFeature(mapFeatureKey,mapReducers),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MapComponent }
    ])
  ],
  declarations: [MapComponent]
})
export class MapModule {}
