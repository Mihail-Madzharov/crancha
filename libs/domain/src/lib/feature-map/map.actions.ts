import { createAction, props } from '@ngrx/store';
import { Path } from '../models/path';
import { Waypoint } from '../models/waypoint';

export const loadPaths = createAction('[Map] Load Paths');

export const selectPathId = createAction(
  '[Map] Select path id',
  props<{ pathId: string }>()
);

export const loadPathsSuccess = createAction(
  '[Map] Load Paths Success',
  props<{ data: Path }>()
);

export const loadWaypoints = createAction(
  '[Map] Load Waypoints',
  props<{ data: Waypoint[] }>()
);

export const loadPathsFailure = createAction(
  '[Map] Load Paths Failure',
  props<{ error: any }>()
);
