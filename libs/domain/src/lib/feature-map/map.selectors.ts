import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMap from './map.reducer';

export const selectMapState = createFeatureSelector<fromMap.MapState>(
  fromMap.mapFeatureKey
);

export const allPathsSelector = createSelector(
  selectMapState,
  fromMap.selectAllPaths
);

export const entitiesSelector = createSelector(
  selectMapState,
  fromMap.selectEntities
);

export const selectedPathId = createSelector(
  selectMapState,
  mapState => mapState.selectedPathId
);

export const selectedPath = createSelector(
  entitiesSelector,
  selectMapState,
  (entities, maps) => entities[maps.selectedPathId]
);

export const waypoints = createSelector(selectMapState, state =>
  state.selectedPathId ? state.entities[state.selectedPathId].waypoints : []
);
