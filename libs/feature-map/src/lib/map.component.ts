import { Component, OnInit } from '@angular/core';
import { MapFacade } from '@crancha/domain';

@Component({
  selector: 'crancha-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private mapFacade: MapFacade) {}

  ngOnInit() {
    this.mapFacade.paths.subscribe(a => {
      console.log(a);
    });

    this.mapFacade.loadPaths();
  }

  loadPaths() {
    this.mapFacade.loadPaths();
  }
}
