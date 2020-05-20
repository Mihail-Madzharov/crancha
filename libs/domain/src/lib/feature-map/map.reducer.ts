import { Action, createReducer, on } from '@ngrx/store';
import * as MapActions from './map.actions';
import { Path } from '../models/path';

export const mapFeatureKey = 'map';

export interface State {
  paths: Path[];
}

export const initialState: State = {
  paths: []
};

export const mapReducers = createReducer(
  initialState,

  on(MapActions.loadPathsSuccess, (state, action) => {
    const newPaths = [...state.paths];
    newPaths.push(action.data);
    return Object.assign({ ...state, paths: newPaths });
  }),
  on(MapActions.loadPathsFailure, (state, action) => state)
);
