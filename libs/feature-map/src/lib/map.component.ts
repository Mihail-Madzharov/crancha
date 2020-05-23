import { Component, OnInit, ViewChild } from '@angular/core';
import { MapFacade } from '@crancha/domain';
import { MapTerrain } from '@crancha/utils';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'crancha-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  public infoWindowContent: string;

  public paths = this.mapFacade.paths$;

  public selectedPathId = this.mapFacade.selectedPathId$;

  public selectedPath = this.mapFacade.selectedPath$;

  public waypoints$ = this.mapFacade.waypoints$;

  constructor(private mapFacade: MapFacade) {}
  public center = { lat: 42.0987626, lng: 24.1593068 };
  public mapTerrain = MapTerrain;

  ngOnInit() {
    this.mapFacade.loadPaths();
  }

  onPolylineClick(pathId: string) {
    this.mapFacade.selectPath(pathId);
  }

  openInfoWindow(info: MapMarker, name: string) {
    this.infoWindowContent = name;
    this.infoWindow.open(info);
    console.log(info);
  }
}
