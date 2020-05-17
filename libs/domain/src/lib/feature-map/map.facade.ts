import { Store } from '@ngrx/store';
import { loadPaths } from './map.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Path } from '../models/path';
import { pathsSelector } from './map.selectors';

@Injectable({ providedIn: 'root' })
export class MapFacade {
  paths: Observable<Path[]> = this.store.select(pathsSelector);
  loadPaths() {
    this.store.dispatch(loadPaths());
  }
  constructor(private store: Store<MapFacade>) {}
}
