import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  catchError,
  mergeMap,
  concatMap
} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

import * as MapActions from './map.actions';
import { loadPathsSuccess } from './map.actions';
import { Path } from '../models/path';
import { of } from 'rxjs';
import { Waypoint } from '../models/waypoint';
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
        const track = gpx.tracks[0];
        const waypoints: Waypoint[] = gpx.waypoints.reduce(
          (
            curr,
            waypoint: {
              name: string;
              lat: number;
              lon: number;
              ele: number;
            }
          ) => {
            const regex = /<!\[CDATA\[(\D.*)]]>/;
            const name = waypoint.name.match(regex);
            if (name) {
              curr.push({
                id: path.id,
                name: name[1],
                lat: waypoint.lat,
                lng: waypoint.lon
              });
            }
            return curr;
          },
          []
        );

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(track.desc, 'text/html');
        const trackDescription = htmlDoc.body.innerHTML.split('<br>');

        // gpx create redundant last element
        trackDescription.pop();

        const res = track.points.map(point => ({
          lat: point.lat,
          lng: point.lon
        }));

        return loadPathsSuccess({
          data: {
            id: path.id,
            pathName: path.name,
            points: res,
            path: path.path,
            color: path.color,
            description: trackDescription,
            waypoints
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
