import { createAction, props } from '@ngrx/store';
import { Path } from '../models/path';

export const loadPaths = createAction('[Map] Load Paths');

export const loadPathsSuccess = createAction(
  '[Map] Load Paths Success',
  props<{ data: Path }>()
);

export const loadPathsFailure = createAction(
  '[Map] Load Paths Failure',
  props<{ error: any }>()
);
