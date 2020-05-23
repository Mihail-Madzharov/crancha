import { Store } from '@ngrx/store';
import { loadPaths, selectPathId } from './map.actions';
import { Injectable } from '@angular/core';
import { MapState } from './map.reducer';
import {
  allPathsSelector,
  entitiesSelector,
  selectedPathId,
  selectedPath,
  waypoints
} from './map.selectors';

@Injectable({ providedIn: 'root' })
export class MapFacade {
  paths$ = this.store.select(allPathsSelector);

  entitiesSelector$ = this.store.select(entitiesSelector);

  selectedPathId$ = this.store.select(selectedPathId);

  selectedPath$ = this.store.select(selectedPath);

  waypoints$ = this.store.select(waypoints);

  loadPaths() {
    this.store.dispatch(loadPaths());
  }

  selectPath(pathId: string) {
    this.store.dispatch(selectPathId({ pathId }));
  }

  constructor(private store: Store<MapState>) {}
}
