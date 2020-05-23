import { createReducer, on } from '@ngrx/store';
import * as MapActions from './map.actions';
import { Path } from '../models/path';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export const mapFeatureKey = 'map';

export interface MapState extends EntityState<Path> {
  selectedPathId: string | null;
}

export const adapter: EntityAdapter<Path> = createEntityAdapter<Path>({
  selectId: path => {
    return path.id;
  }
});

export const initialState: MapState = adapter.getInitialState({
  selectedPathId: ''
});

export const mapReducers = createReducer(
  initialState,

  on(MapActions.loadPathsSuccess, (state, action) => {
    return adapter.addOne(action.data, state);
  }),
  on(MapActions.selectPathId, (state, action) => ({
    ...state,
    selectedPathId: action.pathId
  })),
  on(MapActions.loadPathsFailure, state => state)
);

export const selectAllPaths = adapter.getSelectors().selectAll;
export const selectEntities = adapter.getSelectors().selectEntities;
export const selectTotal = adapter.getSelectors().selectTotal;
