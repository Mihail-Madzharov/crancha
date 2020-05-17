import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { EMPTY, of } from 'rxjs';

import * as MapActions from './map.actions';
import { loadPathsSuccess } from './map.actions';
import { Path } from '../models/path';

@Injectable()
export class MapEffects {
  loadMaps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MapActions.loadPaths),
      switchMap(() => {
        return this.fireStore.collection<Path>('paths').valueChanges();
      }),
      map(paths => {
        return loadPathsSuccess({ data: paths });
      })
    );
  });

  constructor(private actions$: Actions, private fireStore: AngularFirestore) {}
}
