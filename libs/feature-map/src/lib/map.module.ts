import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects, mapFeatureKey, mapReducers } from '@crancha/domain';

import { MapComponent } from './map.component';
import { StoreModule } from '@ngrx/store';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EffectsModule.forFeature([MapEffects]),
    StoreModule.forFeature(mapFeatureKey,mapReducers),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MapComponent }
    ])
  ],
  declarations: [MapComponent]
})
export class MapModule {}
