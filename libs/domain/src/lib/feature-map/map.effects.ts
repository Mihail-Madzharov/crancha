import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  exhaustMap,
  catchError,
  mergeMap,
  concatMap
} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import GPX from 'gpx-parser-builder';

import * as MapActions from './map.actions';
import { loadPathsSuccess } from './map.actions';
import { Path } from '../models/path';
import { of } from 'rxjs';
declare var gpxParser;
@Injectable()
export class MapEffects {
  loadMaps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MapActions.loadPaths),
      switchMap(() => {
        return this.fireStore.collection<Path>('paths').valueChanges();
      }),
      mergeMap(paths => paths),
      concatMap(path => {
        return this.httpProvider.get(path.path, { responseType: 'text' }).pipe(
          map(response => ({ response, path })),
          catchError(a => {
            console.log(a);
            return of(a);
          })
        );
      }),
      map(({ response, path }) => {
        const gpx = new gpxParser();
        gpx.parse(response);
        const res = gpx.tracks[0].points.map(point => ({
          lat: point.lat,
          lng: point.lon
        }));

        return loadPathsSuccess({
          data: {
            id: path.id,
            pathName: path.name,
            points: res,
            path: path.path,
            color: path.color
          }
        });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private fireStore: AngularFirestore,
    private httpProvider: HttpClient
  ) {}
}
